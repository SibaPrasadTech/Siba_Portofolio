import React from 'react'
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']
const COLOURS = ['primary', 'blue', 'red', 'green']


export const Button = (props) => {
  // const { children, type, onClick, buttonStyle, buttonSize, buttonColour, className } = props;
  const { children, buttonStyle, buttonSize, buttonColour, className } = props;
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColour = COLOURS.includes(buttonColour) ? buttonColour : null;

  return (
    <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColour} ${className}`}>
      {children}
    </button>
  )
}