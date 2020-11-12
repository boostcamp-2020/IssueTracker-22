import React, { useState } from 'react';
import styled from 'styled-components';
import IssueLabel from '@components/IssueLabel';
import LabelForm from './LabelForm';

const ItemBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border: 1px solid #e1e4e8;
`;

const LabelField = styled.div`
    flex: 1;
`;

const DescriptionField = styled.div`
    flex: 3;
`;

const ButtonsField = styled.div`
    flex: 1;
    display: inline-flex;
    justify-content: flex-end;
`;

const ButtonWrapper = styled.div`
    padding: 0px 10px;
    cursor: pointer;
`;

const LabelItem = ({
  id, name, description, color,
}) => {
  const [editing, setEditing] = useState(false);

  if (editing) {
    return (
      <LabelForm
        data={{ name, description, color }}
        close={() => setEditing(false)}
      />
    );
  }
  return (
    <ItemBox>
      <LabelField>
        <IssueLabel name={name} color={color}/>
      </LabelField>
      <DescriptionField>
        {description}
      </DescriptionField>
      <ButtonsField>
        <ButtonWrapper onClick={() => setEditing(true)}>Edit</ButtonWrapper>
        <ButtonWrapper>Delete</ButtonWrapper>
      </ButtonsField>
    </ItemBox>
  );
};

export default LabelItem;
