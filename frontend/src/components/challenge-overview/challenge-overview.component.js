import React from 'react';
import { addDays, getMonthAndDayString, getNumOfDays, createDateArray } from '../../utils/date.utils';
import './challenge-overview.styles.css';

export default function ChallengeOverview({ numOfDays, startDate }) {
  console.log(startDate);
  const containerStyle = {
    display: 'grid',
    gridTemplateRows: `repeat(${numOfDays}, 30px)`,
    gridGap: '5px'
  }

  const dateArray = createDateArray(startDate, numOfDays);

  return (
    <div className="challenge-overview">
    <button>Add commitment</button>
      <div style={containerStyle} className="challenge-days">
        {
          dateArray.map((date, index) => {
            return (
              <div 
                key={index} className="" 
                style={ { 
                  color: 'white', 
                  gridRow: index, 
                  lineHeight: '30px', 
                  margin: '0px',
                  backgroundColor: 'black',
                }}>
                  { getMonthAndDayString(date) }
              </div>)
          })
        }
      </div>
      <div className="commitments-container">

      </div>
    </div>
  )
}
