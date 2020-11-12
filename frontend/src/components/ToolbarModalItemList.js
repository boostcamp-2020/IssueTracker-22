import React from 'react';
import styled from 'styled-components';
import ToolbarModalItem from './ToolbarModalItem'

const List = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  width: 320px;
  max-height: 300px;
  overflow-y: auto;
`;

const ToolbarModalItemList = ({ items, identifier, loading, label, switchModal}) => {
    let list = <div>loading...</div>
    let index;
    console.log("label:", label, index)
    const {success, content} = items
    if(!loading && success) {
        switch (label) {
            case 'author': index = 'users'; break;
            case 'label' : index = 'labels'; break;
            case 'milestone' : index = 'milestones'; break;
            case 'assignee' : index = 'users'; break;
        }
        console.log("index:", index)
        list = content[index].map((item) => {
            return (
                <ToolbarModalItem
                type={label}
                identifier={identifier}
                item={item}
                switchModal={switchModal}
                />
            )
        })
    }
    return (
        <List>
            {list}
        </List>
    )
}

export default ToolbarModalItemList