import React from 'react';
import styled from 'styled-components';
import LabelItem from './LabelItem';
import MilestoneItem from './MilestoneItem';
import UserItem from './UserItem';

const List = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  width: 320px;
  max-height: 300px;
  overflow-y: auto;
`;

const SelectMenuList = ({ items, loading, label }) => {
  let list = <div>loading...</div>;

  const { success, content } = items;
  if (!loading && success) {
    if (label === 'Assignees') {
      const { users } = content;
      list = users.map((item) => <UserItem user={item} />);
    } else if (label === 'Labels') {
      const { labels } = content;
    //   list = labels.map((item) => <LabelItem label={item} />);
    } else if (label === 'Milestone') {
      const { milestones } = content;
    //   list = milestones.map((item) => <MilestoneItem milestone={item} />);
    }
  }

  return (
    <List>
      {list}
    </List>
  );
};

export default SelectMenuList;
