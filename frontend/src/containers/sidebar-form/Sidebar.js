import React from 'react';
import styled from 'styled-components';
import selectMenuMode from '../../constants/selectMenuMode';
import SidebarFormContainer from './SidebarFormContainer';

const Wrapper = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 200px;
  padding: 0 10px;
`;

const Sidebar = () => (
  <Wrapper>
    <SidebarFormContainer mode={selectMenuMode.Assignees} />
    <SidebarFormContainer mode={selectMenuMode.Labels} />
    <SidebarFormContainer mode={selectMenuMode.Milestone} />
  </Wrapper>
);

export default Sidebar;
