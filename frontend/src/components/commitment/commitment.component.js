import React from 'react';
import { getNumOfDays, formatDateToString } from '../../utilities/date.utils';

export default function Commitment({ commitment }) {
  const { startDate, endDate, name, id } = commitment;
  const startDateString = formatDateToString(new Date(startDate));
  const numOfDays = getNumOfDays(new Date(startDate), new Date(endDate));

  function drag(ev) {
    const name = ev.target.getAttribute('name');
    const numOfDays = ev.target.getAttribute('numofdays');
    const container = document.querySelector(`[date="${startDateString}"][container-name="${name}"]`)
    const children = Array.from(container.children);
    ev.dataTransfer.setData("commitmentId", ev.target.id);
    ev.dataTransfer.setData("name", name);
    ev.dataTransfer.setData("numofdays", numOfDays);
    console.log(name);
    setTimeout(() => {
      children.forEach((child) => {
        child.style.display = 'none';
      })
    }, 0)
    
  }
  function dragOver(ev) {
    ev.stopPropagation();
  }
  function dragEnd(ev) {
    console.log(ev.target);
    setTimeout(() => {
      ev.target.style.display = 'block';
      ev.target.parentNode.style.display = 'block';
    }, 0)
  }

  const style = {
    height: `${30*numOfDays}px`,
    backgroundColor:'red',
    zIndex: '200',
    position: 'absolute',
    width:'98%',
    border: '1px solid black'
  }
  return (
    <div>
      <div 
        className='commitment-item'
        id={`${id}`} 
        style={style} 
        draggable={true} 
        onDragStart={drag}
        onDragOver={dragOver}
        onDragEnd={dragEnd}
        name={`${name}`}
        numofdays={`${numOfDays}`}
        >
        {name}
      </div>
    </div>
  )
}
