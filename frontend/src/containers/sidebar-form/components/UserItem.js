import React, { useState } from 'react';
import styled from 'styled-components';
import CheckIcon from '../../../assets/icon/CheckIcon';
import ProfileImage from './ProfileImage';
import apiUri from '../../../constants/api';

const Item = styled.li`
  all: unset;
  padding: 10px 28px;
  font-size: 15px;
  position: relative;
  :not(:first-child) {
    border-top: 1px solid lightgray;
  }
  :hover {
    background-color: #1A60F5;
    color: white;
  }
`;

const UserWrapper = styled.div`
  display: flex;
`;

const UserNickname = styled.div`
  font-weight: bold;
`;

const CheckIconWrapper = styled.div`
  position: absolute;
  right: 92%;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

const UserItem = ({ user, onItemClick, selected, issueId }) => {
  const { id, nickname, profile_url: profileUrl } = user;

  const [visible, setVisible] = useState(selected);

  const onClick = async () => {
    if(issueId) {
      const mode = visible ? 0 : 1;
      const body = {
        issue_id: issueId,
        assignee_id: id,
        mode: mode,
      }
      const response = await fetch(apiUri.issueUpdate, {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const { success, message } = await response.json();
      
      if (!success) {
        alert(message);
        return;
      }

    }

    setVisible(!visible);
    onItemClick(user)();
  };

  return (
    <Item onClick={onClick}>
      <CheckIconWrapper visible={visible}>
        <CheckIcon />
      </CheckIconWrapper>
      <UserWrapper>
        <ProfileImage profileUrl={profileUrl} nickname={nickname} />
        <UserNickname>{nickname}</UserNickname>
      </UserWrapper>
    </Item>
  );
};

export default UserItem;
