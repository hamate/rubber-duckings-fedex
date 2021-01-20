import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useAlert } from 'react-alert';
import 'react-datepicker/dist/react-datepicker.css';
import generalDataFetch from '../../utilities/generalFetch';
import moment from 'moment';
import { useHistory } from "react-router-dom";

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

  const alert = useAlert();
  const history = useHistory();
  moment().format();

  const submitChallenge = async () => {
    const method = 'POST';
    const endpoint = '/admin/challenge';
    const data = {
      challengeDetails: {
        challengeName,
        challengeDescription,
        startDate: moment(startDate).format().slice(0, 10),
        endDate: moment(endDate).format().slice(0, 10),
      },
    };
    try {
      if (!challengeName || !challengeDescription || !startDate || !endDate) {
        alert.error(<div style={{ color: 'white' }}>some data is missing, <br/> Please set all details!</div>);
        throw Error('Missing data');
      }
      
      await generalDataFetch(endpoint, method, data);
      history.push('/admin');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='create-challenge-main-container'>
      
        <h1 className='create-challenge-title'>
          <span>Challenge</span> Creator Page
        </h1>
        <div className='create-challenge-container'>
          <div className='challenge-form'>
            <label htmlFor='form-input' className='form-label'>
              Please give a title to your <span>Challenge</span>
            </label>
            <input
              type='text'
              className='form-input'
              placeholder='My Life-Changing Challenge'
              onChange={(event) => setChallengeName(event.target.value)}
            />
            <label htmlFor='form-input' className='form-label'>
              Please add a description to your <span>Challenge</span>
            </label>
            <textarea
              type='text'
              className='form-input description'
              placeholder='In this challenge I will do the following awesome things...'
              onChange={(event) => setChallengeDescription(event.target.value)}
            />
          </div>
          <div className='challenge-date'>
            <label htmlFor='date-picker' className='form-label'>
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
