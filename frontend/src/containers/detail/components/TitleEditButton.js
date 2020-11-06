import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  float: left;
  margin: 0;
  padding: 3px 12px;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  background-color: #2ea44f;
  border: 1px solid;
  border-radius: 6px;
  cursor: pointer;
  margin-left: auto;
  height: 40px;
  width: 70px
`;

const TitleEditButton = () => {
  return <Button>Edit</Button>;
};

export default TitleEditButton;
