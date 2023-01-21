// const worker = new Worker();
// worker.postMessage({ hola: "zerozoo" }); // 워커에 메시지를 보낸다.

// 메시지는 JSON구조로 직렬화 할 수 있는 값이면 사용할 수 있다. Object등
// worker.postMessage( { name : '302chanwoo' } );

// 워커로 부터 메시지를 수신한다.
// worker.onmessage = function (e) {
//   console.log("호출 페이지 - ", e.data);
// };
// requestIdleCallback(() => console.log("run on idle!"), { timeout: 1000 });
import { _ } from "./lib/_.mjs";

const URL = "./worker.mjs";
const args = _.seq(1000);

const echo = new Worker(URL, { type: "module" });
const a2 = new Worker(URL, { type: "module" });
echo.postMessage({ id: 1, data: 0 });
a2.postMessage({ id: 2, data: 100 });

const handleOnMessage = (e) => {
  console.log("on Message from worker", e.data);
};
echo.onmessage = handleOnMessage;
