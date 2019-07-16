import React, { useState } from "react";

//import any components needed
import NumberButton from "./NumberButton.js"

//Import your array data to from the provided data file
import { numbers } from "../../../data"

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [topRow] = useState(numbers.slice(0, 3))
  const [secondRow] = useState(numbers.slice(3, 6))
  const [thirdRow] = useState(numbers.slice(6, 9))
  const [lastRow] = useState(numbers.slice(9))
  return (
    <div className="numbers">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}
       <div className="row topRow">{topRow.map((number, index) =>  <NumberButton key={index} number={number}/>)}</div>
       <div className="row secondRow">{secondRow.map((number, index) =>  <NumberButton key={index} number={number}/>)}</div>
       <div className="row thirdRow">{thirdRow.map((number, index) =>  <NumberButton key={index} number={number}/>)}</div>
       <div className="row lastRow">{lastRow.map((number, index) =>  index === 0 ? <NumberButton key={index} number={number} buttonClass={"zero"}/> : <NumberButton key={index} number={number} buttonClass={"reg"}/> )}</div>
    </div>
  );
};

export default Numbers