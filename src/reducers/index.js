import apiReducer from './api-reducer';
import selectedAnimalReducer from './selected-animal-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  apiResponse: apiReducer,
  selectedAnimalReducer: selectedAnimalReducer
});

export default rootReducer;