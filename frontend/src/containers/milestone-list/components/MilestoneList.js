import React from 'react';
import styled from 'styled-components';
import MilestoneIcon from '@assets/icon/MilestoneIcon';
import CheckIcon from '@assets/icon/CheckIcon';
import MilestoneItem from './MilestoneItem';

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

const ListHeaderTab = styled.span`
  color: ${(props) => (props.active ? 'black' : '#636363')};
  font-weight: ${(props) => (props.active ? '600' : 'normal')};
  margin-right: 17px;
`;

const IconWrapper = styled.span`
  margin-right: 5px;
`;

const MilestoneList = ({ milestones }) => {
  const openCount = milestones.filter((val) => val.is_open === 1).length;
  const closeCount = milestones.filter((val) => val.is_open === 0).length;

  const openActive = true;

  // eslint-disable-next-line max-len
  const milestoneList = milestones.map((milestone) => <MilestoneItem key={milestone.id} milestone={milestone} />);

  return (
    <ListWrapper>
      <ListHeader>
        <ListHeaderTab active={openActive}>
          <IconWrapper><MilestoneIcon/></IconWrapper>
          {openCount}
          {' Open'}
        </ListHeaderTab>
        <ListHeaderTab active={!openActive}>
          <IconWrapper><CheckIcon/></IconWrapper>
          {closeCount}
          {' Closed'}
        </ListHeaderTab>
      </ListHeader>

      {milestoneList}
    </ListWrapper>
  );
};

export default MilestoneList;
