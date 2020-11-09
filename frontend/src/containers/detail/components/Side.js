import React from 'react';
import styled from 'styled-components';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow:1;
`;

const Side = styled.div`
  margin-bottom: 10px;

`;
const SideInfo = () => (
  <>
    <FlexContainer>
      <Side>Assignees</Side>
      <Side>Labels</Side>
      <Side>Milestone</Side>
    </FlexContainer>
  </>
);

export default SideInfo;
