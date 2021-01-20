import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import DatePicker from 'react-datepicker';
import { useAlert } from 'react-alert';
import generalDataFetch from '../../utilities/generalFetch';
import { getChallenge } from '../../redux/challenge/challenge.action';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

function EditChallenge() {
  const challenge = useSelector((state) => state.challenge.challenge)
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date(challenge.startDate));
  const [endDate, setEndDate] = useState(new Date(challenge.endDate));
  const [challengeName, setChallengeName] = useState(null);
  const [challengeDescription, setChallengeDescription] = useState(null);
  const DatePickerOnChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  
  useEffect(() => {
    dispatch(getChallenge());
  }, [dispatch]);


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
             Title of Your Current <span>Challenge</span>
            </label>
            <input
              type='text'
              className='form-input'
              placeholder='My Life-Changing Challenge'
              onChange={(event) => setChallengeName(event.target.value)}
              value={challenge.title}
            />
            <label htmlFor='form-input' className='form-label'>
            Description of Your Current <span>Challenge</span>
            </label>
            <textarea
              disabled='true'
              type='text'
              className='edit-form-input description'
              placeholder='In this challenge I will do the following awesome things...'
              onChange={(event) => setChallengeDescription(event.target.value)}
              value={challenge.description}
            />
            <button className="enable-editing">Click to edit</button>
          </div>
          <div className='challenge-date'>
            <label htmlFor='date-picker' className='form-label'>
              Interval of Your Current <span>Challenge</span>
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
              Update Your Challenge
            </button>
          </div>
        </div>
      
    </div>
  );
}

export default EditChallenge
