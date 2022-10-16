export function decodedResistorValue(arr_colors: string[]): string {
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
  const lastValue: { [key: string]: number } = {
    black: 1,
    brown: 10,
    red: 100,
    orange: 1000,
    yellow: 10000,
  };

  const result: number[] = [];
  const lastResult: number[] = [];

  const arr_2: string[] = arr_colors.slice(0, 2);
  const arr_last: string[] = arr_colors.slice(2, 3);

  console.log(arr_last);
  arr_2.forEach((e: string) => {
    const x: number = value[e];
    return result.push(x);
  });
  arr_last.forEach((e: string) => {
    const x: number = lastValue[e];
    return lastResult.push(x);
  });
  const resNum: any = (parseInt(result.join("")) *
    parseInt(lastResult.join(""))) as any;

  if (resNum < 1000) {
    return String(resNum).concat(" ohms");
  } else {
    return String(resNum / 1000).concat(" kiloohms");
  }
}

console.log(decodedResistorValue(["red", "blue", "orange"]));
