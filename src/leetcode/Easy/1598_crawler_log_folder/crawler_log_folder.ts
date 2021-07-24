export default function minOperations(logs: string[]): number {
  let counter: number = 0;
  logs.forEach((element) => {
    if (element === "../") {
      if (counter > 0) {
        counter--;
      }
    } else if (element !== "./") {
      counter++;
    }
  });

  return counter;
}
