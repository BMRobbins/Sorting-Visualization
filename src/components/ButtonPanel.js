import React from "react";
import Button from "./Button";
import classes from "./ButtonPanel.module.css";
const ButtonPanel = (props) => {
  return (
    <div className={classes.button_container}>
      <Button text="Randomize Array" onClick={props.unsortArray} />
      <Button text="Bubble Sort" onClick={props.implementBubbleSort} />
      <Button text="Selection Sort" onClick={props.implementSelectionSort} />
      <Button text="Merge Sort" onClick={props.implementMergeSort} />
    </div>
  );
};

export default ButtonPanel;
