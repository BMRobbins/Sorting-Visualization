const BubbleSort = (array) => {
  let arr = [...array];
  let actions = [];
  for (let i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      if (arr[j] > arr[j + 1]) {
        actions.push([j, j + 1, arr[j], arr[j + 1], 1, 2]);
        actions.push([j, j + 1, arr[j], arr[j + 1], 0, 2]);
        actions.push([j, j + 1, arr[j], arr[j + 1], 2, 2]);
        // If the condition is true then swap them
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return { actions };
};

export default BubbleSort;
