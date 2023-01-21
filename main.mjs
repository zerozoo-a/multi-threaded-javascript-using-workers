// const worker = new Worker();
// worker.postMessage({ hola: "zerozoo" }); // 워커에 메시지를 보낸다.

// 메시지는 JSON구조로 직렬화 할 수 있는 값이면 사용할 수 있다. Object등
// worker.postMessage( { name : '302chanwoo' } );

// 워커로 부터 메시지를 수신한다.
// worker.onmessage = function (e) {
//   console.log("호출 페이지 - ", e.data);
// };
// requestIdleCallback(() => console.log("run on idle!"), { timeout: 1000 });
import { seq } from "./lib/_.mjs";

const URL = "./worker.mjs";
const a = seq(5);

console.log("seq?", [...seq(5)]);

const a1 = new Worker(URL);
const a2 = new Worker(URL);
a1.postMessage({ msg: "hi" });
a2.postMessage({ msg: "hello" });
