import React from 'react';
import styled from 'styled-components';
import RelativeTime from '../../../lib/relativeTime';

const TitleDetailContainer = styled.div`
  display: flex;
  padding-bottom: 8px;
  font-size: 14px;
  color: #586069;
  border-bottom: 1px solid;
  flex-wrap: wrap;
  margin: 10px 20px;
`;

const Open = styled.div`
  margin-right: 8px;
  color: #fff;
  background-color: #28a745;
  border-color: #fff;
  border: 1px solid;
  display: inline-block;
  padding: 5px 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  border-radius: 0.7em;
`;

const UserName = styled.div`
  margin-right : 6px;
  font-weight: 600;
`;

const Info = styled.div`
  display: flex;
  margin-top: 8px;
  line-height: 1.5;
  background-color: initial;
  font-weight: 400;
  color: #586069;
  text-decoration: none;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
`;
const Close = styled.div`
  margin-right: 8px;
  color: #fff;
  background-color: #D73A49;
  border-color: #fff;
  border: 1px solid;
  display: inline-block;
  padding: 5px 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;
  border-radius: 0.7em;
`;
const TitleDetail = (data) => {
  const { children } = data;
  const isOpen = children.is_open === 1 ? <Open>open</Open> : <Close>close</Close>;
  const status = children.is_open === 1 ? 'open' : 'close';
  const { length } = children.comments;
  const time = RelativeTime(children.createdAt);

  return (
    <>
      <TitleDetailContainer>
        {isOpen}
        <Info>
          <UserName>{children.user.nickname}</UserName>
          <div>{status}ed this issue {time} · {length} comment</div>
        </Info>
      </TitleDetailContainer>
    </>
  );
};

export default TitleDetail;
