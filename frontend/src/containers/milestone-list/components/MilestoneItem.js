import React from 'react';
import styled from 'styled-components';
import CalendarIcon from '@assets/icon/CalendarIcon';
import formalizeDateString from '@lib/formalizeDateString';
import ProgressBar from '@components/ProgressBar';
import pathUri from '@constants/path';
import Button from './Button';

const ItemBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border: 1px solid #e1e4e8;
    color: #636363;
`;

const MilestoneContent = styled.div`
  flex: 4;
`;

const MilestoneSummary = styled.div`
  flex: 3;
`;

const Title = styled.a`
  font-size: 1.6rem;
  color: black;
  :hover {
    color: #1A60F5;
    text-decoration: underline;
  }
`;

const Content = styled.div`
  margin-top: 5px;
`;

const StatusWrapper = styled.span`
  margin-right: 15px;
`;

const StatusFigure = styled.span`
  font-weight: 600;
  margin-right: 5px;
  color: black;
`;

const IconWrapper = styled.span`
  margin-right: 4px;
`;

const MilestoneItem = ({ milestone }) => {
  const {
    id, title, description, due_date, is_open, open_issues, closed_issues, progress,
  } = milestone;

  const percent = (progress * 100).toFixed(0);

  const onEditClick = () => {
    window.location.href = `/#${pathUri.milestone}/edit/${id}`;
  };

  const onCloseClick = () => {
    // TOOD : 마일스톤 close 기능 구현
    console.log('close milestone');
  };

  const onDeleteClick = () => {
    // TOOD : 마일스톤 delete 기능 구현
    console.log('delete milestone');
  };

  const blueWhiteButtonStyle = { all: 'unset', color: 'rgb(3, 102, 214)', padding: '5px 15px 5px 0' };
  const redWhiteButtonStyle = { all: 'unset', color: 'rgb(203, 36, 49)', padding: '5px 15px 5px 0' };

  return (
    <ItemBox>
      <MilestoneContent>
        <Title href={`/#${pathUri.milestone}/${id}`}>{title}</Title>
        <Content>
          <IconWrapper><CalendarIcon/></IconWrapper>
          {' Due by '}
          {formalizeDateString(due_date)}
        </Content>
        <Content>{description}</Content>
      </MilestoneContent>

      <MilestoneSummary>
        <ProgressBar percent={percent} />
        <Content>
          <StatusWrapper>
            <StatusFigure>{`${percent}%`}</StatusFigure>
            complete
          </StatusWrapper>
          <StatusWrapper>
            <StatusFigure>{open_issues || 0}</StatusFigure>
            open
          </StatusWrapper>
          <StatusWrapper>
            <StatusFigure>{closed_issues || 0}</StatusFigure>
            closed
          </StatusWrapper>
        </Content>
        <Content>
          <Button onClick={onEditClick} text="Edit" style={blueWhiteButtonStyle}/>
          <Button onClick={onCloseClick} text="Close" style={blueWhiteButtonStyle}/>
          <Button onClick={onDeleteClick} text="Delete" style={redWhiteButtonStyle}/>
        </Content>
      </MilestoneSummary>
    </ItemBox>
  );
};

export default MilestoneItem;
