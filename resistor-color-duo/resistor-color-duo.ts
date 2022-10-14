export function decodedValue(arr_colors: string[]): number {
  const value: { [key: string]: number } = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };
  const result: number[] = [];
  const arr_2: string[] = arr_colors.slice(0, 2);
  arr_2.forEach((e: string) => {
    const x: number = value[e];
    return result.push(x);
  });
  return parseInt(result.join(""));
}

console.log(decodedValue(["red", "blue", "green"]));
