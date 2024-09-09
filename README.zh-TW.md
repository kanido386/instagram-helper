# Instagram Helper

[English](README.md) | [繁體中文](README.zh-TW.md)

Instagram Helper 是一個 Node.js 應用程式，幫助你追蹤 Instagram 追蹤者的變化。它能讓你獲取當前的追蹤者名單，並與之前儲存的名單進行比較，以識別新的追蹤者和取消追蹤你的用戶。

## 功能

- 獲取當前的 Instagram 追蹤者名單
- 將追蹤者名單儲存為 JSON 檔案
- 將當前追蹤者與之前儲存的名單進行比較
- 識別新的追蹤者和取消追蹤你的用戶

## 前置條件

在開始之前，請確保你已滿足以下要求：

- 本地機器上已安裝 Node.js
- Instagram 帳戶的憑證（ds_user_id 和 sessionid）

## 安裝步驟

1. Clone 這個 repo：
   ```
   git clone https://github.com/kanido386/instagram-helper.git
   cd instagram-helper
   ```

2. 安裝所需套件：
   ```
   npm install
   ```

3. 在根目錄創建一個 `.env` 檔案，並添加你的 Instagram 憑證：
   ```
   DS_USER_ID=你的_ds_user_id
   SESSION_ID=你的_session_id
   X_IG_APP_ID=the_x_ig_app_id_from_instagram
   ```

## 獲取 Instagram 憑證

要獲取你的 `ds_user_id`、`sessionid` 和 `X-IG-App-ID`，有兩種方法：

### 方法一：使用網路標籤

你可以參考這個影片來獲取憑證：[Get Instagram X-IG-App-ID and Cookie](https://www.youtube.com/watch?v=izeYkVZydxQ)

1. 在網頁瀏覽器中登錄 Instagram。
2. 打開瀏覽器的開發者工具（通常是 F12 或右鍵選擇「檢查」）。
3. 進入「網路」標籤。
4. 刷新頁面或執行某個動作（例如滾動）以捕捉網路請求。
5. 尋找對 Instagram API 端點的請求（例如，https://i.instagram.com/api/v1/）。
6. 在請求標頭中：
   - 找到 `Cookie` 標頭以獲取 `ds_user_id` 和 `sessionid`。
   - 找到 `X-IG-App-ID` 標頭。

### 方法二：使用應用程式標籤

1. 在網頁瀏覽器中登錄 Instagram。
2. 打開瀏覽器的開發者工具（通常是 F12 或右鍵選擇「檢查」）。
3. 進入「應用程式」或「儲存」標籤。
4. 在「Cookies」下找到 Instagram 的域名。
5. 查找 `ds_user_id` 和 `sessionid` 的 cookies。
6. 複製這些值。

獲取憑證後，請將它們用於你的 `.env` 檔案中：

```
DS_USER_ID=你的_ds_user_id
SESSION_ID=你的_session_id
X_IG_APP_ID=the_x_ig_app_id_from_instagram
```

注意：請小心這些憑證，切勿公開分享。

**注意：** 分享或濫用這些憑證可能導致未經授權訪問你的 Instagram 帳戶。保持這些憑證的私密性並負責任地使用它們是至關重要的。濫用憑證可能違反 Instagram 的服務條款，並可能危及你的帳戶安全。使用此應用程式需自行承擔風險，並始終優先考慮個人資訊的安全。

## 使用方法

要運行 Instagram Helper，請執行：
```
node index.js
```

## 授權

這個專案是根據 MIT 授權條款進行授權的。