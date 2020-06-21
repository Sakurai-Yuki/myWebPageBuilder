# GulpCodingTemplate v2.21

Gulpで作ったWebページビルドツールです。


## 依存ライブラリなど
* node v8.10.0
* npm v6.13.6

## インストール
`npm install`

## 設定ファイル
/gulp/config.js

## Usage
* 開発を行うファイルはsrcディレクトリ内に入れてください。

### 設定
* ejsを使う場合は `ejsFlag` を `true` にしてください(デフォルトは `true` )。
* sassを使う場合は `sassFlag` を `true` にしてください(デフォルトは `true` )。
* sassを使う場合でsourcemapを使う場合は 'sourcemapFlag' を `true` にしてください(デフォルトは `true` )。
* 画像を圧縮する場合は `imgMinFlag` を `true` にしてください(デフォルトは `true` )。
* 画像を圧縮する場合でwebpを使う場合は `imgWebPFlag` を `true` にしてください(デフォルトは `true` )。
* JSの圧縮を行いたい場合は `jsMinFlag` を`true` にしてください(デフォルトは `false` )。
* ローカルサーバーを使用する場合は `localServerFlag` を `true` にしてください(デフォルトは `true` )。
* ローカルサーバーを使用する場合を使用する場合でSSIを使用する場合は `serverMode` を `SSI` にしてください(デフォルトは `normal` )。
* ローカルサーバーを使用する場合を使用する場合でPHPを使用する場合は `serverMode` を `PHP` にしてください(デフォルトは `normal` )。

### ejs
* htmlの吐き出し元となる、ejsファイルをhtmlフォルダの中にいれて開発してください。監視中、ejsフォルダのファイルが更新されると、distフォルダに吐出されます。
* 共通テンプレートは \_include に入れてください。\_ から始まるejsファイルはhtmlに書き出されません。
* 各ページのパス情報やmeta情報は \_json フォルダ内の meta.json に記載してください。

### scss
* cssの吐き出し元となる、scssファイルを_scssフォルダの中にいれて開発してください。監視中、scssフォルダのファイルが更新されると、distフォルダに吐出されます。

### js
* jsファイルを_jsフォルダの中にいれて開発してください。監視中、jsフォルダのファイルが更新されると、distフォルダに吐出されます。

### img
* imgファイルを\_imgフォルダの中にいれて開発してください。監視中、imgフォルダのファイルが更新されると、distフォルダに吐出されます。
* webpを生成したい場合も同様に\_imgフォルダにimgファイルを入れてください。
