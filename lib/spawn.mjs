import { _ } from "./_.mjs";
export class Spawn {
  constructor(path = undefined) {
    if (!path) throw Error("path is undefined");
    this.path = path;
    this.worker = new Worker(path, { type: "module" });

    console.log(`${path} worker spawned`);
  }

  *_genWorker(n = 1) {
    while (0 < n) {
      n--;
      yield new Spawn(this.path);
    }
  }

  *gen(n = 1) {
    _.take(n, this.gen(n));
  }
}
