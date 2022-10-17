export function toRna(input: string): any {
  const transcript: { [key: string]: string } = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  const arrInput: string[] = [...input];

  const arrTranscribed: any[] = [];

  arrInput.forEach(function (c) {
    arrTranscribed.push(transcript[c]);
  });
  if (arrTranscribed.includes(undefined)) {
    throw new Error("Invalid input DNA.");
  } else {
    return arrTranscribed.join("");
  }
}

console.log(toRna("A"));
