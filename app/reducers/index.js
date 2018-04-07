import { combineReducers } from 'redux';

import nav from './nav';
import todosReducer from './todos'
import usersReducer from './users'

const reducers = combineReducers({
  nav,
  todosReducer,
  usersReducer
});

export default reducers;
