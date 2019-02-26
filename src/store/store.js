import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';

import albums from './reducers/albums';
import album from './reducers/album';
import player from './reducers/player';
import historical from './reducers/historical';
import user from './reducers/user';

// to use redux dev tools in the browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    albums,
    album,
    player,
    historical,
    user
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
