import { _ } from "./_.mjs";
export class Spawn {
  constructor(path = undefined, worker = new Worker(path, { type: "module" })) {
    if (!path) throw Error("path is undefined");
    this.path = path;
    this.worker = worker;

    console.log(`${path} worker spawned`);
  }

  *spawn(n = 1) {
    while (0 < n) {
      n--;
      yield new Spawn(this.path);
    }
  }

  // *hire(n = 1) {
  //   while(){
  //     yield this._spawn()

  //   }
  //   // return _.take(n, this._spawn(n));
  // }
}
