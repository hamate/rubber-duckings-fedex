import React from 'react';
import { useSelector } from 'react-redux';
import { getMonthAndDayString,  createDateArray, getNumOfDays } from '../../utilities/date.utils';
import CommitmentGroup from '../commitment-group/commitment-group.component';
import './challenge-overview.styles.css';

export default function ChallengeOverview() {
  const { challenge } = useSelector(state => state.challenge);
  const { userId } = useSelector(state => state.user);
  const userCommitments = useSelector(state => {
    const userCommitments = state.commitments.commitments.filter((commitment) => commitment.userId === userId);
    return userCommitments;
  });
  const { title, description } = challenge;
  const startDate = new Date(challenge.startDate);
  const endDate = new Date(challenge.endDate);
  const numOfDays = getNumOfDays(startDate, endDate);
  const commitmentGroups = userCommitments.reduce((acc, commitment) => {
      if (!acc.includes(commitment.name)) {
        acc.push(commitment.name);
      }
      return acc
    }, []);
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
  }

  const dateArray = createDateArray(startDate, numOfDays);

  return (
    <div className="challenge-overview">
      <div style={containerStyle} className="challenge-days">
        <h4 style={{ color: 'black'}}>Date</h4>
        {
          dateArray.map((date, index) => {
            return (
              <div 
                key={`day-${index}`} className="" 
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
        commitmentGroups.map((group) => {
          const commitments = userCommitments.filter((commitment) => commitment.name === group)
          return <CommitmentGroup name={group} startDate={ startDate } endDate={endDate} numOfDays={ numOfDays } commitments={commitments} />
        })
      }
      </div>
    </div>
  )
}
