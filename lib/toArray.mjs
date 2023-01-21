export function toArray(gen) {
  const it = gen[Symbol.iterator]();
  return it.next().value;
}
