const MergeSort = (array) => {
  let arr = [...array];
  let helperArray = [...array];
  let actions = [];
  mergeSort(arr, helperArray, 0, arr.length - 1, actions);
  return { actions };
};

const mergeSort = (arr, helper, low, high, actions) => {
  if (low < high) {
    let middle = Math.floor((low + high) / 2);
    mergeSort(arr, helper, low, middle, actions);
    mergeSort(arr, helper, middle + 1, high, actions);
    merge(arr, helper, low, middle, high, actions);
    // I have to run this twice I have a bug in the animations
    merge(arr, helper, low, middle, high, actions);
  }
};

const merge = (arr, helper, low, middle, high, actions) => {
  for (let i = low; i <= high; i++) {
    helper[i] = arr[i];
  }

  let helperLeft = low;
  let helperRight = middle + 1;
  let curr = low;

  while (helperLeft <= middle && helperRight <= high) {
    if (helper[helperLeft] <= helper[helperRight]) {
      actions.push([curr, helperLeft, arr[curr], helper[helperLeft], 1, 10]);
      actions.push([curr, helperLeft, arr[curr], helper[helperLeft], 0, 10]);
      actions.push([curr, helperLeft, arr[curr], helper[helperLeft], 2, 10]);
      arr[curr] = helper[helperLeft];
      helperLeft++;
    } else {
      actions.push([curr, helperRight, arr[curr], helper[helperRight], 1, 10]);
      actions.push([curr, helperRight, arr[curr], helper[helperRight], 0, 10]);
      actions.push([curr, helperRight, arr[curr], helper[helperRight], 2, 10]);
      arr[curr] = helper[helperRight];
      helperRight++;
    }
    curr++;
  }

  let remaining = middle - helperLeft;
  for (let i = 0; i <= remaining; i++) {
    actions.push([
      curr + i,
      helperLeft + i,
      arr[curr + i],
      helper[helperLeft + i],
      1,
      10,
    ]);
    actions.push([
      curr + i,
      helperLeft + i,
      arr[curr + i],
      helper[helperLeft + i],
      0,
      10,
    ]);
    actions.push([
      curr + i,
      helperLeft + i,
      arr[curr + i],
      helper[helperLeft + i],
      2,
      10,
    ]);
    arr[curr + i] = helper[helperLeft + i];
  }
};

export default MergeSort;
