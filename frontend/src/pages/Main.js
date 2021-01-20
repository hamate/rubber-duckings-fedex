import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCommitmentsAsync } from '../redux/commitments/commitments.actions';
import ChallengeOverview from '../components/challenge-overview/challenge-overview.component';


export default function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCommitmentsAsync());
  }, [])
  return (
    <div>
      <h1> Challenge </h1>
      <ChallengeOverview /> 
    </div>
  )
}
