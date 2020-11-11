import React from 'react';
import styled from 'styled-components';

const ItemWrapper = styled.div`
    border: 1px solid ;
`;

const LabelItem = ({ description }) => (
  <ItemWrapper>{description}</ItemWrapper>
);

export default LabelItem;
