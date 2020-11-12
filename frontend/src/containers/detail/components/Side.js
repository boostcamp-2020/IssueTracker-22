import React from 'react';
import styled from 'styled-components';
import selectMenuMode from '../../../constants/selectMenuMode';
import SidebarFormContainer from '../../sidebar-form/SidebarFormContainer';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow:1;
    flex: 1 1 0;
    align-items: stretch;
    min-width: 200px;
    padding: 0 10px;
    margin-bottom : auto;
`;

const SideInfo = () => (
  <>
    <FlexContainer>
      {/*<SidebarFormContainer mode={selectMenuMode.Assignees} />*/}
      {/*<SidebarFormContainer mode={selectMenuMode.Labels} />*/}
      {/*<SidebarFormContainer mode={selectMenuMode.Milestone} />*/}
    </FlexContainer>
  </>
);

export default SideInfo;
