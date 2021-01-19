import CommitmentActionTypes from './commitments.types';
import generalDataFetch from '../../utilities/generalDataFetch';

export const getCommitments = (commitments) => ({
  type: CommitmentActionTypes.GET_COMMITMENTS,
  payload: commitments
});

export const commitmentsLoading = () => ({ type: CommitmentActionTypes.COMMITMENTS_LOADING });

export const commitmentsError = (errorMessage) => ({ type: CommitmentActionTypes.COMMITMENTS_ERROR, payload: errorMessage })

export const fetchCommitmentsAsync = () => {
  return async (dispatch) => {
    dispatch(commitmentsLoading());
    const endpoint = '/commitments';
    const method = 'GET';
    const results = await generalDataFetch(endpoint, method);
    if (results.status !== 200) {
      return dispatch(commitmentsError(results.jsonData.message))
    }
    return dispatch(getCommitments(results.jsonData));
  }
}