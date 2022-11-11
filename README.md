# Dual Package

CommonJS と ES Modules を扱う学習用リポジトリ


## Directories

```
.
|- client
|   |- es         // ES Modules を使う
|   |   |- dist   // import-from を直接ブラウザで実行できないのでバンドルしたファイル群
|   |- ts         // ES Modules + TypeScript で使う
|   |- node       // CommonJS で使う
|- pkg-js
|   |- index.js   // エントリーポイント
|   |- src        // 実際のコード
|   |- lib
|       |- pkg-js.cjs  // CommonJS
|       |- pkg-js.mjs  // ES Modules
|- pkg-ts
    |- index.ts   // エントリーポイント
    |- src        // 実際のコード
    |- lib
        |- pkg-ts.cjs  // CommonJS
        |- pkg-ts.mjs  // ES Modules
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
    "import": "./lib/pkg-js.mjs",
    "require": "./lib/pkg-js.cjs"
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
          "import": "./lib/pkg-js.mjs",
          "require": "./lib/pkg-js.cjs"
        },
        "./hooks": {
          "import": "./lib/hooks/pkg-js.mjs",
          "require": "./lib/hooks/pkg-js.cjs"
        }
      }
    }
    ```
    ```js
    import pkg from 'pkg-js'  // exports["."].import のパス
    import hooks from 'pkg-js/hooks'  // exports["./hooks"].import のパス
    ```