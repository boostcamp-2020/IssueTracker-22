import React from 'react';
import styled from 'styled-components';
import LabelItem from './LabelItem';

const ListWrapper = styled.div`
    border-radius: 6px;
`;

const ListHeader = styled.div`
    background-color: #f6f8fa;
    padding: 16px;
    border: 1px solid #e1e4e8;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
`;

const LabelList = ({ labels }) => (
  <ListWrapper>
    <ListHeader>
      {labels.length}
      {' '}
      labels
    </ListHeader>
    {labels.map(({
      id, name, description, color_code: color,
    }) => <LabelItem key={id} id={id} name={name} description={description} color={color}/>) }
  </ListWrapper>
);

export default LabelList;
