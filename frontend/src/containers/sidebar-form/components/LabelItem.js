import React, { useState } from 'react';
import styled from 'styled-components';
import CheckIcon from '../../../assets/icon/CheckIcon';
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
    background-color: #FAFAFA;
  }
`;

const ColorDot = styled.div`
  display: inline-block;
  background-color: ${(props) => props.color};
  width: 14px;
  height: 14px;
  border-radius: 2em;
  margin-right: 10px;
`;

const Description = styled.div`
`;

const CheckIconWrapper = styled.div`
  position: absolute;
  right: 92%;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

const LabelItem = ({ label, onItemClick, selected, issueId }) => {
  const {
    id, name, description, color_code: colorCode,
  } = label;

  const [visible, setVisible] = useState(selected);

  const onClick = async () => {
    if(issueId) {
      const mode = visible ? 0 : 1;
      const body = {
        issue_id: issueId,
        label_id: id,
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
    onItemClick(label)();
  };

  return (
    <Item onClick={onClick}>
      <CheckIconWrapper visible={visible}>
        <CheckIcon />
      </CheckIconWrapper>
      <div>
        <ColorDot color={colorCode} />
        <span>{name}</span>
      </div>
      <Description>{description}</Description>
    </Item>
  );
};

export default LabelItem;
