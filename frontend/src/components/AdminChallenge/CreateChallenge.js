import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function CreateChallenge() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const DatePickerOnChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className='create-challenge-main-container'>
      <h1 className='create-challenge-title'>
        <span>Challenge</span> Creator Page
      </h1>
      <div class='create-challenge-container'>
        <div className='challenge-form'>
          <label for='form-input' class='form-label'>
            Please give a name to your <span>Challenge</span>
          </label>
          <input
            type='text'
            class='form-input'
            placeholder='My Life-Changing Challenge'
          />
        </div>
        <div className='challenge-date'>
          <label for='date-picker' class='form-label'>
            Please select the interval of the <span>Challenge</span>
          </label>
          <DatePicker
            minDate={new Date()}
            selected={startDate}
            onChange={DatePickerOnChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        </div>
        <div className='create-challenge-submit'>
          <button className='submit-challenge'>
            Start Your Challenge
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateChallenge;
