import apiReducer from '../../reducers/api-reducer';
import * as c from './../../actions/ActionTypes';

describe('apiReducer', () => {
  let action;
  const defaultState = {
    isLoading: false,
    animals: [],
    error: null
  }

  const loadingState = {
    isLoading: false,
    animals: [],
    error: null
  }

  test('should return default state if no action', () => {
    expect(apiReducer(defaultState, {type:null})).toEqual(
      {
        isLoading: false,
        animals: [],
        error: null
      }
    );
  });

  test('isLoading should be true when requesting api', () => {
    action = {type: c.REQUEST_ANIMALS}
    expect(apiReducer(defaultState, action)).toEqual(
      {
        isLoading: true,
        animals: [],
        error: null
      }
    )
  })

  test('should get animals and set isLoading to false', () => {
    const animals = ['neko']
    action = {
      type: c.GET_ANIMALS_SUCCESS,
      animals
    }
    expect(apiReducer(loadingState, action)).toEqual(
      {
        isLoading: false,
        animals: animals,
        error: null
      }
    )
  })

  test('should set isLoading to false and error', () => {
    const error = 'error'
    action = {
      type: c.GET_ANIMALS_FAILURE,
      error
    }
    expect(apiReducer(loadingState, action)).toEqual(
      {
        isLoading: false,
        animals: [],
        error: error
      }
    )
  })


});