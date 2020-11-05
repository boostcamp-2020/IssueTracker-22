import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  all: unset;
  display: block;
  font-size: 15px;
  border: none;
  padding: 8px 15px;
`;

const CancelButton = ({ path }) => {
  const onClick = () => {
    window.location.href = path; // '/#/issues';
  };
  return <Button type="reset" value="Cancel" onClick={onClick}>Cancel</Button>;
};

export default CancelButton;
