interface Curry {
  (fn: (...args: any[]) => any): (...args: any[]) => any;
  placeholder: Symbol;
}

export const curry: Curry = (func) => {
  return function curried(...args: Array<any>) {
    const isComplete =
      args.length >= func.length &&
      !args.slice(0, func.length).includes(curry.placeholder);

    if (isComplete) {
      return func.apply(this, args);
    } else {
      return function (...outOfFuncParamRangeArgs: Array<any>) {
        const arrayOfArgsWithRemovedPlaceholders =
          replacePlaceholdersWithPossibleParamsOutOfFunctionRange(
            args,
            outOfFuncParamRangeArgs
          );

        return curried(
          ...arrayOfArgsWithRemovedPlaceholders,
          ...outOfFuncParamRangeArgs
        );
      };
    }
  };
};

function replacePlaceholdersWithPossibleParamsOutOfFunctionRange(
  args: Array<any>,
  outOfFuncParamRangeArgs: Array<any>
) {
  return args.map((arg) =>
    arg === curry.placeholder && outOfFuncParamRangeArgs.length
      ? outOfFuncParamRangeArgs.shift()
      : arg
  );
}

curry.placeholder = Symbol();
