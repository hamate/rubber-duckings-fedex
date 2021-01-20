import React, { useState } from 'react';

function CreateChallenge() {
  return (
    <div className='create-challenge-main-container'>
      CreateChallenge
      <div class='create-challenge-container'>
        <label for='exampleFormControlInput1' class='form-label'>
          Name of the challenge
        </label>
        <input
          type='text'
          class='form-input'
          placeholder='My Life-Changing Challenge'
        />
      </div>
    </div>
  );
}

export default CreateChallenge;
