export function isLeap(input: number): boolean {
  if (input % 4 === 0 && input % 100 === 0 && input % 400 === 0) {
    return true;
  } else if (input % 4 === 0 && input % 100 === 0) {
    return false;
  } else if (input % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
