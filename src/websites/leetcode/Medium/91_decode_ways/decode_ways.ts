// export function numDecodings(s: string): number {
//   const dp: {
//     [key: number]: number;
//   } = {
//     [s.length]: 1,
//   };
//
//   function dfs(i: number) {
//     if (dp.hasOwnProperty(i)) {
//       return dp[i];
//     }
//
//     if (s[i] === "0") {
//       return 0;
//     }
//
//     let res: number = dfs(i + 1);
//
//     if (
//       i + 1 < s.length &&
//       (s[i] === "1" ||
//         (s[i] === "2" && Number(s[i + 1]) >= 0 && Number(s[i + 1]) <= 6))
//     ) {
//       res += dfs(i + 2);
//     }
//
//     dp[i] = res;
//     return res;
//   }
//
//   return dfs(0);
// }

export function numDecodings(s: string): number {
  const dp: {
    [key: number]: number;
  } = {
    [s.length]: 1,
  };

  function dfs(i: number) {
    if (dp.hasOwnProperty(i)) {
      return dp[i];
    }

    if (s[i] === "0") {
      return 0;
    }

    let res: number = dfs(i + 1);

    if (
      i + 1 < s.length &&
      (s[i] === "1" ||
        (s[i] === "2" && Number(s[i + 1]) >= 0 && Number(s[i + 1]) <= 6))
    ) {
      res += dfs(i + 2);
    }

    dp[i] = res;
    return res;
  }

  return dfs(0);
}
