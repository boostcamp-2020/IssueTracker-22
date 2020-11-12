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

const SelectMenuList = ({ items, loading, label, onItemClick, selectedItems, id }) => {
  let list = <div>loading...</div>;
  const { success, content } = items;
  const issueId = id ? id : null;
  if (!loading && success) {
    switch (label) {
      case selectMenuMode.Assignees[0]:
        const { users } = content;
        
        list = users.map((item) => {
          const index = selectedItems.findIndex((val) => val.id === item.id);
          const selected = index === -1 ? false : true;
          return (
            <UserItem
              key={item.id}
              user={item}
              onItemClick={onItemClick}
              selected={selected}
              issueId={issueId}
            />
          )
        });
        break;
      case selectMenuMode.Labels[0]:
        const { labels } = content;
        
        list = labels.map((item) => {
          const index = selectedItems.findIndex((val) => val.id === item.id);
          const selected = index === -1 ? false : true;
          return (
          <LabelItem
            key={item.id}
            label={item}
            onItemClick={onItemClick}
            selected={selected}
            issueId={issueId}
          />)
        });
        break;
      case selectMenuMode.Milestone[0]:
        const { milestones } = content;
        
        list = milestones.map((item) => {
          const index = selectedItems.findIndex((val) => val.id === item.id);
          const selected = index === -1 ? false : true;
          return (
          <MilestoneItem
            key={item.id}
            milestone={item}
            onItemClick={onItemClick}
            selected={selected}
            issueId={issueId}
          />);
        });
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
