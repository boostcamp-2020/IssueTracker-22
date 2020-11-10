import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  all: unset;
  padding: 10px 28px;
  font-size: 15px;
  color: #636363;
  :not(:first-child) {
    border-top: 1px solid lightgray;
  }
  :hover {
    background-color: #FAFAFA;
  }
`;

const ColorDot = styled.div`
  display: inline-block;
  background-color: ${(props) => props.color};
  width: 14px;
  height: 14px;
  border-radius: 2em;
  margin-right: 10px;
`;

const Description = styled.div`
`;

const LabelItem = ({ label, onClick }) => {
  const {
    id, name, description, color_code: colorCode,
  } = label;

  return (
    <Item onClick={onClick(label)}>
      <div>
        <ColorDot color={colorCode} />
        <span>{name}</span>
      </div>
      <Description>{description}</Description>
    </Item>
  );
};

export default LabelItem;
