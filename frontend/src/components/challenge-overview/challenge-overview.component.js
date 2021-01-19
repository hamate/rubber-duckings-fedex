import React from 'react';
import { useSelector } from 'react-redux';
import { getMonthAndDayString,  createDateArray } from '../../utilities/date.utils';
import CommitmentGroup from '../commitment-group/commitment-group.component';
import './challenge-overview.styles.css';

export default function ChallengeOverview({ numOfDays, startDate }) {
  console.log(numOfDays);
  const commitmentGroups = useSelector((state) => {
    const { commitments } = state.commitments;
    return commitments.reduce((acc, commitment) => {
      if (!acc.includes(commitment.name)) {
        acc.push(commitment.name);
      }
      return acc
    }, []);

  })
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  const dateArray = createDateArray(startDate, numOfDays);

  return (
    <div className="challenge-overview">
    <button>Add commitment</button>
      <div style={containerStyle} className="challenge-days">
        <h1>Date</h1>
        {
          dateArray.map((date, index) => {
            return (
              <div 
                key={index} className="" 
                style={ { 
                  color: 'black',  
                  margin: '0px',
                  maxHeight: '30px',
                  minHeight: '30px',
                }}>
                  { getMonthAndDayString(date) }
              </div>)
          })
        }
      </div>
      <div className="commitments-container">

      {
        commitmentGroups.map((group) => <CommitmentGroup name={group} startDate={ startDate } numOfDays={ numOfDays } />)
      }
      </div>
    </div>
  )
}
