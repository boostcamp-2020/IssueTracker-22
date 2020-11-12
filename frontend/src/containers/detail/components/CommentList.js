import React from 'react';
import styled from 'styled-components';
import RelativeTime from '../../../lib/relativeTime';
import UserProfileContainer from '../../user-profile/UserProfileContainer';

const CommentDetailContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 10px;
  font-size: 14px;
  color: #24292;
  line-height: 1.5;
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
`;

const CommentDetailStyle = styled.div`
  width: 100%;
  margin-bottom: 10px;
  margin-left : 10px;
  border: 1px solid;
  border-radius: 6px;
  min-width : 100px;
`;

const CommentTitle = styled.div`
  display: flex;
  color: #586069;
  background-color: #f7f8fa;
  min-height: 50px;
  padding-right: 16px;
  padding-left: 16px;
  border-bottom: 1px solid;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-size: 14px;
`;

const CommentDescription = styled.div`
  display: flex;
  min-height: 200px;
  padding: 10px;
`;


const Author = styled.div`
  margin: auto 0;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  color: #24292e;
  background-color: initial;
  font-weight: 600;
`;

const Info = styled.div`
  margin: auto 0;
  margin-left: 10px;
`;

const Description = styled.div`
  margin: auto 0;
`;

const Comment = (comments) => comments.map((comment) => {
  const time = RelativeTime(comment.createdAt);
  const { user } = comment;

  return (
    <>
      <CommentDetailContainer>
        <UserProfileContainer user={user} />
        <CommentDetailStyle>
          <CommentTitle>
            <Author>{ user.nickname }</Author>
            <Info> commented { time }</Info>
          </CommentTitle>
          <CommentDescription>
            <Description>{ comment.description }</Description>
          </CommentDescription>
        </CommentDetailStyle>
      </CommentDetailContainer>
    </>
  );
});

export default Comment;
