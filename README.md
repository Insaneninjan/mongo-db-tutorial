# Mongo DB
**[Official Site](https://account.mongodb.com/account/login)**
## What's Mongo DB
No-SQLの一つ
- 動的スキーマ設定
- 大容量データでもさばける
- SQL文が不要
- サーバレス構成と相性が良い


## Step
1. Schema設計 => スキーマファイルを作成
2. SchemaからModelを作成
3. DB接続
4. DB処理を実装し、Routingを行う

## Tips
- JSONでやりとりを行う場合は明示的に以下の記述が必要
```
app.use(express.json());
```
- 作成・更新する場合は、save()で保存して上げる
- HTTP methodに対応するmongooseのメソッドを利用する
    - GET => find()
    - CREATE => 純粋にreq.bodyに記述
    - POST/PATCH => findByIdAndUpdate()
    - DELETE => findByIdAndDelete()




# Install Library

```
% npm i nodemon express mongoose dotenv
```
- nodemon
常駐プログラム（サーバをいちいち起動しなくても良くなる）
- mongoose
MongoDBを扱うためのライブラリ
- express
node.jsのフレームワーク
- dotenv
環境変数を扱うライブラリ
