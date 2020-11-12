import React from 'react';
import styled from 'styled-components';
import selectMenuMode from '../../../constants/selectMenuMode';
import UserItem from './UserItem';
import LabelItem from './LabelItem';
import MilestoneItem from './MilestoneItem';

const List = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  width: 320px;
  max-height: 300px;
  overflow-y: auto;
`;

const SelectMenuList = ({ items, loading, label, onItemClick }) => {
  let list = <div>loading...</div>;

  const { success, content } = items;
  if (!loading && success) {
    switch (label) {
      case selectMenuMode.Assignees[0]:
        const { users } = content;
        list = users.map((item) => (
          <UserItem
            key={item.id}
            user={item}
            onItemClick={onItemClick}
            selected={false}
          />
        ));
        break;
      case selectMenuMode.Labels[0]:
        const { labels } = content;
        list = labels.map((item) => (
          <LabelItem
            key={item.id}
            label={item}
            onItemClick={onItemClick}
            selected={false}
          />
        ));
        break;
      case selectMenuMode.Milestone[0]:
        const { milestones } = content;
        list = milestones.map((item) => (
          <MilestoneItem
            key={item.id}
            milestone={item}
            onItemClick={onItemClick}
            selected={false}
          />
        ));
        break;
      default: break;
    }
  }

  return (
    <List>
      {list}
    </List>
  );
};

export default SelectMenuList;
