export function addLineBreak(str) {
  return str.split("\n").map((s) => <p>{s}</p>);
}
