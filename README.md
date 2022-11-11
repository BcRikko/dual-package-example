# Dual Package（CommonJS and ES Modules) Sample Repository

## Directories

```
.
|- client
|   |- es   // ES Modules を使う
|   |   |- dist  // import-from を直接ブラウザで実行できないのでバンドルしたファイル群
|   |- node // CommonJS で使う
|- mypackage
    |- index.js  // エントリーポイント
    |- src 　　　　// 実際のコード
    |- lib
        |- mypackage.cjs  // CommonJS
        |- mypackage.mjs  // ES Modules
```

## What I learned

### Dual Package について

- [Dual CommonJS/ES module packages - Node.js](https://nodejs.org/api/packages.html#dual-commonjses-module-packages)

```json
{
  "files": [
    "lib"
  ],
  "type": "module",
  "exports": {
    "import": "./lib/mypackage.mjs",
    "require": "./lib/mypackage.cjs"
  },
}
```

- 条件付きエクスポート（exports）
  - `"main"`と違い、条件によって参照するファイルを分けられるもの
  - exports に指定されたパス以外を読み込もうとすると [ERR\_PACKAGE\_PATH\_NOT\_EXPORTED](https://nodejs.org/api/errors.html#err_package_path_not_exported) が発生する
  - 値
    - node: Node.jsの環境で読み込んだときに参照するパス
    - import: `import`や`import()`で読み込んだときに参照するパス
    - require: `require()`で読み込んだときに参照するパス
    - default: フォールバック用
- ネストした場合
    ```json
    {
      "exports": {
        ".": {
          "import": "./lib/mypackage.mjs",
          "require": "./lib/mypackage.cjs"
        },
        "./hooks": {
          "import": "./lib/hooks/mypackage.mjs",
          "require": "./lib/hooks/mypackage.cjs"
        }
      }
    }
    ```
    ```js
    import pkg from 'mypackage'  // exports["."].import のパス
    import hooks from 'mypackage/hooks'  // exports["./hooks"].import のパス
    ```