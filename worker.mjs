// importScripts("lib/_.mjs");
import { _ } from "./lib/_.mjs";

self.onmessage = function (e) {
  // 1초 후에 호출한 페이지에 데이터를 보낸다.
  postMessage(e.data);
};
