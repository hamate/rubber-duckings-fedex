import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import generalDataFetch from '../../utilities/generalFetch';

function CreateChallenge() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [challengeName, setChallengeName] = useState(null);
  const [challengeDescription, setChallengeDescription] = useState(null);
  const DatePickerOnChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const submitChallenge = async () => {
    const method = 'POST';
    const endpoint = '/kingdom/buildings';
    const data = {
      challengeDetails: {
        challengeName,
        challengeDescription,
        startDate,
        endDate,
      }
    };

    try {
      await generalDataFetch(endpoint, method, data)
    } catch (error) {
     console.log(error.message);
    }
    
  }

  return (
    <div className='create-challenge-main-container'>
      <h1 className='create-challenge-title'>
        <span>Challenge</span> Creator Page
      </h1>
      <div class='create-challenge-container'>
        <div className='challenge-form'>
          <label for='form-input' class='form-label'>
            Please give a title to your <span>Challenge</span>
          </label>
          <input
            type='text'
            class='form-input'
            placeholder='My Life-Changing Challenge'
            onChange={(event) => setChallengeName(event.target.value)}
          />
          <label for='form-input' class='form-label'>
            Please add a description to your <span>Challenge</span>
          </label>
          <textarea
            type='text'
            class='form-input description'
            placeholder='In this challenge I will do the following awesome things...'
            onChange={(event) => setChallengeDescription(event.target.value)}
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
          <button className='submit-challenge' onClick={submitChallenge}>
            Start Your Challenge
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateChallenge;
