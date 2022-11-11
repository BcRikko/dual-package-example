(() => {
  // ../mypackage/lib/mypackage.mjs
  var hello = (name) => `Hello ${name}!`;

  // es/index.js
  var msg = hello("rikko");
  console.log(msg);
})();
