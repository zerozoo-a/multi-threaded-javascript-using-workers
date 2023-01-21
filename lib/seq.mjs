export function* seq(s = 0, l = 1) {
  if (arguments.length === 1) {
    l = s;
    s = 0;
  }

  while (s < l) {
    s++;
    yield s;
  }
}
