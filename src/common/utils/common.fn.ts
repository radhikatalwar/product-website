export const debounceFn = (
  func: (searchKey: string) => void,
  delay: number
) => {
  let timer: NodeJS.Timeout;
  return function innerFn(this: any, ...args: any) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
