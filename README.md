# Instagram Helper

[English](README.md) | [繁體中文](README.zh-TW.md)

Instagram Helper is a Node.js application that helps you track changes in your Instagram followers. It allows you to fetch your current followers list and compare it with a previously saved list to identify new followers and users who have unfollowed you.

## Features

- Fetch your current Instagram followers list
- Save followers list to a JSON file
- Compare current followers with a previously saved list
- Identify new followers and users who have unfollowed you

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine
- Instagram account credentials (ds_user_id and sessionid)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/kanido386/instagram-helper.git
   cd instagram-helper
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your Instagram credentials:
   ```
   DS_USER_ID=your_ds_user_id
   SESSION_ID=your_session_id
   ```

## Getting Instagram Credentials

There are two methods to obtain your `ds_user_id`, `sessionid`, and `X-IG-App-ID`:

### Method 1: Using Network Tab

You can refer to this video to get the credentials: [Get Instagram X-IG-App-ID and Cookie](https://www.youtube.com/watch?v=izeYkVZydxQ)

1. Log in to Instagram in your web browser.
2. Open the browser's developer tools (usually F12 or right-click and select "Inspect").
3. Go to the "Network" tab.
4. Refresh the page or perform an action (like scrolling) to capture network requests.
5. Look for a request to an Instagram API endpoint (e.g., https://i.instagram.com/api/v1/).
6. In the request headers:
   - Find the `Cookie` header to get `ds_user_id` and `sessionid`.
   - Find the `X-IG-App-ID` header.

### Method 2: Using Application Tab

1. Log in to Instagram in your web browser.
2. Open the browser's developer tools (usually F12 or right-click and select "Inspect").
3. Go to the "Application" or "Storage" tab.
4. Under "Cookies", find the Instagram domain.
5. Look for the `ds_user_id` and `sessionid` cookies.
6. Copy these values.

After obtaining the credentials using either method, use them in your `.env` file:

Note: Be cautious with these credentials and never share them publicly.

**Disclaimer:** Sharing or misusing these credentials can lead to unauthorized access to your Instagram account. It's crucial to keep them private and use them responsibly. Misuse of credentials may violate Instagram's terms of service and potentially compromise your account security. Use this application at your own risk and always prioritize the safety of your personal information.

## Usage

To run the Instagram Helper:
```
node index.js
```

## License
This project is licensed under the MIT License.
