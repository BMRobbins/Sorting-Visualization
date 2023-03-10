import React from "react";
import ButtonPanel from "./ButtonPanel";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <div className={classes.header_container}>
      <div>
        <h1 className={`serif ${classes.header_title}`}>Sorting Visualizer</h1>
      </div>
      <div>
        <ButtonPanel
          unsortArray={props.unsortArray}
          implementBubbleSort={props.implementBubbleSort}
          implementSelectionSort={props.implementSelectionSort}
          implementMergeSort={props.implementMergeSort}
        />
      </div>
    </div>
  );
};

export default Header;
