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
  cursor: pointer;
  :disabled {
    background-color: #89C990;
    cursor: default;
  }
`;

const CommentButton = ({ onClick, target }) => {
  return <Button type="submit" value="Submit" onClick={onClick} disabled={target.description === ''}>Comment</Button>;
};

export default CommentButton;
