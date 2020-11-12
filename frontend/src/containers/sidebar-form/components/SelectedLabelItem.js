import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  background-color: ${(props) => props.color};
  padding: 2px 8px;
  border-radius: 2em;
  margin: 8px 5px 8px 0;
`;

const SelectedLabelItem = ({ label }) => {
  const {
    id, name, description, color_code: colorCode,
  } = label;

  return (
    <Wrapper color={colorCode}>
      <span>{name}</span>
    </Wrapper>
  );
};

export default SelectedLabelItem;
