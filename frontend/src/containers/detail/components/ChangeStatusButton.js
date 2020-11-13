import React from 'react';
import styled from 'styled-components';
import apiUri from '../../../constants/api';

const Button = styled.button`
  all: unset;
  display: block;
  font-size: 15px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 10px;
  background-color: white;
  font: 400 13.3333px Arial;;
  font-size: 15px;
  padding: 8px 15px;
  margin-left:auto;
  margin-right: 10px;
`;

const ChangeStatusButton = ({ issue, user, callback }) => {
  const onClick = async () => {
    if(user !== null) {
      const { id, is_open } = issue;
      const isOpen = is_open ? 0 : 1;
      console.log(isOpen);
      await fetch(apiUri.issueUpdate, {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          issue_id: id,
          is_open: isOpen,
        }),
      }).then(res => {
        console.log(res);
        callback();
      });
    } else {
      alert('로그인 후 이용 가능합니다.');
    }
  };

  const isOpen = issue.is_open === 1 ? "Close issue" : "Reopen issue";
  return <Button type="submit" value="Submit" onClick={onClick}>{isOpen}</Button>;
};

export default ChangeStatusButton;
