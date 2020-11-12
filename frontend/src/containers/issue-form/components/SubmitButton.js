import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  color: white;
  font-size: 15px;
  background-color: #0DBF18;
  border: 1px solid #009B09;
  border-radius: 5px;
  padding: 8px 15px;
  :disabled {
    background-color: #89C990;
  }
`;

// eslint-disable-next-line arrow-body-style
const SubmitButton = ({ onClick, target, text }) => {
  return <Button type="submit" value="Submit" onClick={onClick} disabled={target === ''}>{text}</Button>;
};

export default SubmitButton;
