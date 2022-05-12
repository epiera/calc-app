import React from "react";
import { PropTypes } from "prop-types";
import Button from "./Button";

// DRY: Don't repeat yoursealf

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

const renderButtons = onClickNumber => {



  return numbers.map(number => (
    <Button key={number} text={number.toString()} clickHandler={onClickNumber}></Button>
  ))
}

const Numbers = ({ onClickNumber }) => (
  <section className="numbers">
    {renderButtons(onClickNumber)}
  </section>
)


Numbers.propTypes = {
  onClickNumber: PropTypes.func.isRequired
}

export default Numbers