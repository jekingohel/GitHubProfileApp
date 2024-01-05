import {createStore, compose} from 'redux';
import rootReducer from './reducers';

// Declare the Redux DevTools extension in the global window interface
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// Use the Redux DevTools extension compose function or fallback to the default compose
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store with the rootReducer and enhancers
const store = createStore(rootReducer, composeEnhancers());

export default store;
