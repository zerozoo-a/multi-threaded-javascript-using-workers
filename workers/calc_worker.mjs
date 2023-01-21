import { _ } from "../lib/_.mjs";

const handleOnMessage = (e) => {
  console.log("hi?", e);
  postMessage({ result: 1 + 1 + e.data.arg });
};
self.onmessage = handleOnMessage;
