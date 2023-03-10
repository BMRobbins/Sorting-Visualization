const SelectionSort = (array) => {
  let arr = [...array];
  let actions = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      actions.push([i, minIndex, arr[i], arr[minIndex], 1, 50]);
      actions.push([i, minIndex, arr[i], arr[minIndex], 0, 50]);
      actions.push([i, minIndex, arr[i], arr[minIndex], 2, 50]);
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return { actions };
};

export default SelectionSort;
