export function* seq(s = 0, l = 1) {
  console.log(arguments.length);
  if (arguments.length === 1) {
    l = s;
    s = 0;
  }

  while (s < l) {
    s++;
    yield s;
  }
}
