# 餐廳清單
一個簡單的餐廳清單，使用者可以註冊、登入，並且可以增加、更改、瀏覽、刪除個人的餐廳資料。

### 功能描述
- 使用者登入：使用者可以透過Email、密碼登入，亦可使用第三方應用程式Facebook登入，若是密碼不正確，或是帳號不存在，會跳出提示訊息。
- 使用者註冊：使用者需輸入名字、帳號、密碼，並重複輸入密碼確認密碼正確，名字為非必填其他為必填，若Email已註冊、兩次輸入密碼不一致、必填欄位未填，皆會跳出提示訊息。
- 瀏覽：使用者登入後可以瀏覽自己的所有餐廳清單內容，也可點入餐廳查看詳細資訊。
- 新增：使用者登入後可以新增多筆餐廳資料。
- 修改：使用者登入後可以修改餐廳資訊，如名稱、地址等等。
- 刪除：使用者登入後可以刪除自己清單內的餐廳。
- 搜尋：使用者可以透過搜尋欄位，以餐廳名稱或分類查詢想找的餐廳。


### 初始化步驟
1. 打開終端機(Terminal)，將專案clone至本機位置
```
git clone https://github.com/ellie32411/restaurant-list-final.git
```
2. 進入專案資料夾
```
cd restaurant_list
```
3. 安裝專案所需npm套件
```
npm install
```
4. 將種子資料匯入mongodb中
```
npm run seed
```
終端機顯示mongodb connected!及mongodb connected!以及done即代表成功匯入種子資料
按下Ctrl+C退回終端機輸入指令狀態

5. 完成後，即可開始執行程式
```
npm run dev
```
6. 開啟任一瀏覽器並於網址中輸入下列網址，即可連至網頁
```
http://localhost:3000
```

### 環境建置與需求(prerequisites)
##### Code編輯器
- Visual Studio Code
##### Node環境及套件
- Node.js-14.16.0
- express-4.18.2
- express-handlebars-6.0.7
- method-override-3.0.0
- mongoose-6.9.1
- nodemon-2.0.20
- dotenv-16.0.3
- bcryptjs-2.4.3
- connect-flash-0.1.1
- passport-0.4.1
- passport-local-1.0.0
- passport-facebook-3.0.0
##### 資料庫
- MongoDB