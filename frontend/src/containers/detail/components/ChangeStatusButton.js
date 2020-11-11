import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  all: unset;
  display: block;
  font-size: 15px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  font: 400 13.3333px Arial;;
  font-size: 15px;
  padding: 8px 15px;
  margin-left:auto;
  margin-right: 10px;
`;

const ChangeStatusButton = ({ issue }) => {
  const onClick = () => {
    //status -> update
  };

  const isOpen = issue.is_open === 1 ? "Close issue" : "Reopen issue";
  return <Button type="submit" value="Submit" onClick={onClick}>{isOpen}</Button>;
};

export default ChangeStatusButton;
