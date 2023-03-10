const UnsortArrayFunction = () => {
  let unsortedArray = [];
  let helperArray = [];

  for (let i = 1; i <= 100; i++) {
    helperArray.push(i);
  }

  while (helperArray.length) {
    unsortedArray.splice(
      Math.floor(Math.random() * (unsortedArray.length + 1)),
      0,
      helperArray.pop()
    );
  }

  return unsortedArray;
};

export default UnsortArrayFunction;
