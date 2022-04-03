export default function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: any[]) => any {
  let waiting = false;
  let lastArgs: any[] | null = null;

  function startCooling() {
    setTimeout(() => {
      if (lastArgs) {
        func.apply(this, lastArgs);
        lastArgs = null;
        startCooling();
      } else {
        waiting = false;
      }
    }, wait);
  }

  return function (...args: any[]): any {
    if (!waiting) {
      func.apply(this, args);
      waiting = true;
      startCooling.call(this);
    } else {
      lastArgs = args;
    }
  };
}
