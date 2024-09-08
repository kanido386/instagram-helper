// Inspired by https://github.com/yc5/instagram-crawler/blob/master/list_friendships.py

const axios = require('axios');
const _ = require('lodash');
const fs = require('fs');
require('dotenv').config();

// Access environment variables
const dsUserId = process.env.DS_USER_ID; // ds_user_id
const sessionId = process.env.SESSION_ID; // sessionid

if (!dsUserId || !sessionId) {
  console.error('Error: DS_USER_ID and SESSION_ID must be set in the .env file');
  process.exit(1);
}

const getFriendships = async (id, max = '') => {
  let allUsers = [];

  const fetchUsers = async (currentMax) => {
    try {
      const response = await axios.get(`https://i.instagram.com/api/v1/friendships/${id}/followers/`, {
        params: {
          count: 100,
          search_surface: 'follow_list_page',
          max_id: currentMax
        },
        headers: {
          'X-IG-App-ID': process.env.IG_APP_ID,
          'Cookie': `sessionid=${sessionId}`
        }
      });

      const data = response.data;
      const users = _.map(data.users, user => {
        return _.pick(user, [
          'pk',
          'username',
          'full_name',
          'profile_pic_url'
        ]);
      });

      allUsers = allUsers.concat(users);

      if (data.next_max_id) {
        await fetchUsers(data.next_max_id);
      }
    } catch (error) {
      console.error('Error: %j', error);
    }
  };

  await fetchUsers(max);
  return allUsers;
};

const saveToFile = (data, filename) => {
  try {
    fs.writeFileSync(filename, JSON.stringify(data, null, 2), 'utf8');
    console.log(`Data saved successfully to ${filename}`);
  } catch (error) {
    console.error('Error saving file: %j', error);
  }
};

const compareFollowersList = (currentFollowers, filename) => {
  try {
    const previousFollowers = JSON.parse(fs.readFileSync(filename, 'utf8'));
    const previousIds = new Set(previousFollowers.map(follower => follower.pk));
    const currentIds = new Set(currentFollowers.map(follower => follower.pk));

    const unfollowedIds = [...previousIds].filter(id => !currentIds.has(id));
    const newFollowerIds = [...currentIds].filter(id => !previousIds.has(id));

    if (unfollowedIds.length > 0) {
      console.log('Users who unfollowed you:\n');
      unfollowedIds.forEach(id => {
        const unfollowedUser = previousFollowers.find(follower => follower.pk === id);
        const { username, full_name, profile_pic_url } = unfollowedUser;
        console.log(`${full_name} (${username})`);
        console.log(`${profile_pic_url}\n`);
      });
    }

    if (newFollowerIds.length > 0) {
      console.log('New followers:\n');
      newFollowerIds.forEach(id => {
        const newFollower = currentFollowers.find(follower => follower.pk === id);
        const { username, full_name, profile_pic_url } = newFollower;
        console.log(`${full_name} (${username})`);
        console.log(`${profile_pic_url}\n`);
      });
    }
  } catch (error) {
    console.error('Error comparing followers list: %j', error);
  }
};

async function main() {
  const followers = await getFriendships(dsUserId);
  console.log(dsUserId, 'count:', followers.length);
  
  const filename = 'data/followers.json';
  compareFollowersList(followers, filename);
  saveToFile(followers, filename);
}

main();