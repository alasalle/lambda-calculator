import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton.js"

//Import your array data to from the provided data file
import { numbers } from "../../../data"

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumber] = useState(numbers)
  const [topRow, changeTopRow] = useState(numbers.slice(0, 3))
  const [secondRow, changeSecondRow] = useState(numbers.slice(3, 6))
  const [thirdRow, changeThirdRow] = useState(numbers.slice(6, 9))
  const [lastRow, changeLastRow] = useState(numbers.slice(9))
  return (
    <div className="numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}
       <div className="row topRow">{topRow.map(number =>  <NumberButton number={number}/>)}</div>
       <div className="row secondRow">{secondRow.map(number =>  <NumberButton number={number}/>)}</div>
       <div className="row thirdRow">{thirdRow.map(number =>  <NumberButton number={number}/>)}</div>
       <div className="row lastRow">{lastRow.map((number, index) =>  index === 0 ? <NumberButton number={number} buttonClass={"zero"}/> : <NumberButton number={number} buttonClass={"reg"}/> )}</div>
    </div>
  );
};

export default Numbers