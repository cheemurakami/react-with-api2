import * as c from './ActionTypes';

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestAnimals);
    return fetch(`https://afternoon-headland-99155.herokuapp.com/api/v1/animals/search?kind=cat`)
    .then(response => response.json())
    .then(
      (jsonifiedResponse) => {
        dispatch(getAnimalsSuccess(jsonifiedResponse));
      })
      .catch((error) => {
        dispatch(getAnimalsFailure(error));
      });
  }
}

export const requestAnimals = () => ({
  type: c.REQUEST_ANIMALS
});

export const getAnimalsSuccess = (animals) => ({
  type: c.GET_ANIMALS_SUCCESS,
  animals
});

export const getAnimalsFailure = (error) => ({
  type: c.GET_ANIMALS_FAILURE,
  error
});

