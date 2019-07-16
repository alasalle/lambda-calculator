import React from "react";

const OperatorButton = ({operator}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button className="button operator">{operator.char}</button>
    </>
  );
};

export default OperatorButton
