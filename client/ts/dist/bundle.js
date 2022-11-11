(() => {
  // ../mytspackage/lib/mytspackage.mjs
  var hello = (name) => `Hello ${name}!`;

  // ts/index.ts
  var props = "rikko";
  var msg = hello(props);
  console.log(msg);
})();
