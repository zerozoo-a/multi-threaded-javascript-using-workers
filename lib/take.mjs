export function* take(l = 1, iter) {
  let res = [];
  iter = iter[Symbol.iterator]();
  return (function recur() {
    let cur;
    while (!(cur = iter.next()).done) {
      const a = cur.value;
      res.push(a);

      if (res.length === l) return res;
    }
    return res;
  })();
}
