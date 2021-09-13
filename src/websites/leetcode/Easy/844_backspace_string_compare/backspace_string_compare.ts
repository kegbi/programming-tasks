// Stack solution
// export function backspaceCompare(s: string, t: string): boolean {
//   function processBackspacesAndReturnString(string) {
//     const stack: Array<string> = [];
//
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === "#") {
//         stack.pop();
//       } else {
//         stack.push(string[i]);
//       }
//     }
//
//     return stack.join("");
//   }
//
//   return (
//     processBackspacesAndReturnString(s) === processBackspacesAndReturnString(t)
//   );
// }

// 2 pointers solution
export function backspaceCompare(s: string, t: string): boolean {
  function getCurrentIndex(s, i) {
    let toSkip = 0;
    while (i >= 0) {
      if (s[i] === "#") {
        toSkip++;
      } else if (toSkip > 0) {
        toSkip--;
      } else break;
      i--;
    }
    return i;
  }

  let i = s.length - 1;
  let j = t.length - 1;

  while (i >= 0 || j >= 0) {
    i = getCurrentIndex(s, i);
    j = getCurrentIndex(t, j);

    if (i < 0 && j < 0) return true;
    if (i < 0 || j < 0) return false;
    if (s[i] !== t[j]) return false;
    i--;
    j--;
  }
  return true;
}
