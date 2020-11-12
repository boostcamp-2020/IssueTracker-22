import { useState, useEffect } from 'react';
import apiUri from '@constants/api';

function useMilestones() {
  const [milestones, setMilestones] = useState([]);

  useEffect(() => {
    fetch(apiUri.milestones, {
      method: 'GET',
      mode: 'cors',
    }).then((res) => res.json())
      .then((res) => {
        if (res.success) {
          const newMilestones = [...res.content.milestones];
          setMilestones(newMilestones);
        }
      });
  }, []);

  return milestones;
}

export default useMilestones;
