import Header from "./components/Header";
import classes from "./App.module.css";
import UnsortArrayFunction from "./logic/UnsortArray";
import { useState, useEffect } from "react";
import BubbleSort from "./logic/BubbleSort";
import SelectionSort from "./logic/SelectionSort";
import MergeSort from "./logic/MergeSort";

function App() {
  const [numberArray, setNumberArray] = useState([]);
  const [actions, setActions] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const createUnsortedArray = () => {
    setNumberArray(UnsortArrayFunction());
    setIsSorted(false);
  };

  const implementBubbleSort = () => {
    const { actions } = BubbleSort(numberArray);
    if (!isSorted) {
      setIsSorted(true);
      setActions(actions);
    }
  };

  const implementSelectionSort = () => {
    const { actions } = SelectionSort(numberArray);
    if (!isSorted) {
      setIsSorted(true);
      setActions(actions);
    }
  };

  const implementMergeSort = () => {
    const { actions } = MergeSort(numberArray);
    if (!isSorted) {
      setIsSorted(true);
      setActions(actions);
    }
  };

  useEffect(() => {
    setNumberArray(UnsortArrayFunction());
  }, []);

  useEffect(() => {
    const arrayBars = document.getElementsByClassName("display-bar");
    if (arrayBars.length > 0) {
      let extraElement = arrayBars[0].style;
      extraElement.height = "0";
      extraElement.display = "none";
    }
    for (let i = 0; i < actions.length; i++) {
      let action = actions[i];
      let animationSpeed = action[5];
      // 1.Set Interval being ignored, looks like
      setTimeout(() => {
        if (
          action[0] &&
          action[1] &&
          action[2] &&
          action[3] &&
          action[4] !== undefined
        ) {
          let index1 = action[0];
          let index2 = action[1];
          let colorChange = action[4];
          let iDisplayBar = arrayBars[index1].style;
          let jDisplayBar = arrayBars[index2].style;
          if (colorChange > 0) {
            let color = colorChange === 1 ? "#000080" : "#913175";
            iDisplayBar.backgroundColor = color;
            jDisplayBar.backgroundColor = color;
          } else {
            let iBarHeight = action[2];
            let jBarHeight = action[3];
            iDisplayBar.height = `${jBarHeight * 6}px`;
            jDisplayBar.height = `${iBarHeight * 6}px`;
          }
          let remainingActions = actions.shift();
          setActions(remainingActions);
        }
      }, i * animationSpeed);
    }
  }, [actions]);

  return (
    <div>
      <Header
        unsortArray={createUnsortedArray}
        implementBubbleSort={implementBubbleSort}
        implementSelectionSort={implementSelectionSort}
        implementMergeSort={implementMergeSort}
      />
      <div className={classes.array_container}>
        {numberArray.map((value, idx) => (
          <div
            className="display-bar"
            key={idx}
            style={{
              backgroundColor: "#913175",
              height: `${value * 6}px`,
              width: "10px",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
