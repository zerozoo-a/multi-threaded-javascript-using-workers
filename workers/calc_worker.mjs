import { _ } from "../lib/_.mjs";
const handleOnMessage = (e) => {
  const result = [..._.seq(e.data.arg)];
  console.log("res", result);
  postMessage({ result });
};
self.onmessage = handleOnMessage;
