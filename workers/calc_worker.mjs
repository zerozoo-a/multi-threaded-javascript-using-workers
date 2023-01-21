import { _ } from "../lib/_.mjs";

const handleOnMessage = (e) => {
  const result = [..._.seq(e.data.arg)];
  sayHi();
  prm.then((r) => postMessage({ result: r }));
};
self.onmessage = handleOnMessage;

const sayHi = () => {
  console.log("hi!");
};

const prm = new Promise((res, rej) => {
  setTimeout(() => {
    res("hi too!");
  }, 5000);
});
