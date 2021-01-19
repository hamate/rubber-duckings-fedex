import React, { useLayoutEffect } from 'react';
import { createDateArray, addDays } from '../../utilities/date.utils';

import './commitment-group.styles.css';

export default function CommitmentGroup(props) {
  const { numOfDays, name, startDate } = props;
  const blockArray = createDateArray(startDate, numOfDays);
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    
    ev.target.appendChild(document.getElementById(data));
    
  }

  useLayoutEffect(() => {
    const div = document.querySelector(`[container-id="${name}1"]`);
    console.log(div.getAttribute('date'));
    const newDiv = document.createElement('div');
    newDiv.style.height = '120px';
    newDiv.style.backgroundColor = 'red';
    newDiv.style.zIndex = 200;
    newDiv.style.position = 'absolute';
    newDiv.style.width = '100%'

    div.appendChild(newDiv);
  }, [])
  return (
    <div className="commitment-container" style={containerStyle}>
      <h1 draggable={true} id="draggable" date={new Date()} onDragStart={drag}>{name} </h1>
      {
        blockArray.map((date, index) => {
          return (
            <div 
              key={`${name}${index}`} container-id={`${name}${index}`} date={addDays(startDate, index)} className="calendar-block" 
              style={ { 
                color: 'black', 
                maxHeight: '30px',
                minHeight: '30px', 
                margin: '0px',
                overflowY: 'visible',
                position: 'relative',
              }}
              onDrop={drop}
              onDragOver={allowDrop}
              >
            </div>)
        })
      }
    </div>
  )
}
