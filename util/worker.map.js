const PATH = ({ id }) => `./workers/${id}_worker.mjs`;
const ECHO_WORKER = PATH({ id: "echo" });
const CALC_WORKER = PATH({ id: "calc" });
// const SPAWN_WORKER = PATH({ id: "spawn" });

export { CALC_WORKER };
