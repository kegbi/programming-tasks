export default function curry(func: (...args: Array<any>) => any) {
  return function curried(...args: Array<any>) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2: Array<any>) {
        return curried.apply(this, [...args, ...args2]);
      };
    }
  };
}
