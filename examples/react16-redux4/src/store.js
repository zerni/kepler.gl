import keplerGlReducer from 'kepler.gl/reducers';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {taskMiddleware} from 'react-palm/tasks';

const reducers = combineReducers({
  // <-- mount kepler.gl reducer in your app
  keplerGl: keplerGlReducer
});

// using enhancers
const initialState = {keplerGl: {}};
const middlewares = [taskMiddleware];
const enhancers = [
  applyMiddleware(...middlewares)
];

export default createStore(reducers, initialState, compose(...enhancers));
