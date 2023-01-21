// const worker = new Worker();
// worker.postMessage({ hola: "zerozoo" }); // 워커에 메시지를 보낸다.

// 메시지는 JSON구조로 직렬화 할 수 있는 값이면 사용할 수 있다. Object등
// worker.postMessage( { name : '302chanwoo' } );

// 워커로 부터 메시지를 수신한다.
// worker.onmessage = function (e) {
//   console.log("호출 페이지 - ", e.data);
// };
// requestIdleCallback(() => console.log("run on idle!"), { timeout: 1000 });
// import { _ } from "./lib/_.mjs";

// const PATH = ({ id }) => `./workers/${id}_worker.mjs`;
// const ECHO_WORKER = PATH({ id: "echo" });
// const CALC_WORKER = PATH({ id: "calc" });

// const echo_worker = new Worker(ECHO_WORKER, { type: "module" });
// const calc_worker = new Worker(CALC_WORKER, { type: "module" });

// echo_worker.postMessage({ id: 1, data: 0 });
// calc_worker.postMessage({ arg: 100 });

const handleOnMessage = (e) => {
  console.log("on Message from worker", e.data);
};

// echo_worker.onmessage = handleOnMessage;
// calc_worker.onmessage = handleOnMessage;

import { Spawn } from "./lib/spawn.mjs";
import { CALC_WORKER } from "./util/worker.map.js";

const a1 = new Spawn(CALC_WORKER);
// a1.worker.postMessage({ arg: 1 });
// a1.worker.onmessage = handleOnMessage;

const k = a1.spawn(5);
console.log("🚀 ~ file: main.mjs:39 ~ k", k);
k.next(); // 2nd worker spawned
k.next(); // 3rd worker spawned...
