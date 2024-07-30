export const hasInLine = (line: string, arr: string[]) => {
  for (let i = 0; i < arr.length; i++) {
    if (line.indexOf(arr[i]) === -1) {
      continue;
    }
    return arr[i];
  }
  return false;
};
