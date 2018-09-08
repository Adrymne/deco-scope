import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(persistState('melds', { key: 'decoScope' }))
);

export default store;
