import React from 'react';
import styled from 'styled-components';
import LabelItem from './LabelItem';

const ListWrapper = styled.div`
    margin: 10px;
    border-radius: 6px;
`;

const LabelList = ({ labels }) => (
  <ListWrapper>
    {labels.map(({ id, description }) => <LabelItem id={id} description={description}/>) }
  </ListWrapper>
);

export default LabelList;
