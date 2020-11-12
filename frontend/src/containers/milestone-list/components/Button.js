import React from 'react';

const Button = ({ onClick, text, style }) => (
  <button type="button" onClick={onClick} style={style}>
    {text}
  </button>
);

export default Button;
