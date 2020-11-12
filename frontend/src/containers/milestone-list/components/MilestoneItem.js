import React from 'react';
import styled from 'styled-components';

const ItemBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border: 1px solid #e1e4e8;
`;

const MilestoneContent = styled.div`
    flex: 1;
`;

const MilestoneSummary = styled.div`
    flex: 1;
`;

const MilestoneItem = ({ milestone }) => {
  const {
    id, title, description, due_date, is_open, open_issues, closed_issues, progress,
  } = milestone;

  return (
    <ItemBox>
      <MilestoneContent>content</MilestoneContent>
      <MilestoneSummary>summary</MilestoneSummary>
    </ItemBox>
  );
};

export default MilestoneItem;
