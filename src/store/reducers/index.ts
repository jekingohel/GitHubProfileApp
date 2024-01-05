import {combineReducers} from 'redux';
import Users from './Users';

/**
 * Root reducer that combines all the reducers.
 */
const CollectionOfReducers = combineReducers({
  Users: Users,
});

export default CollectionOfReducers;

/**
 * Type representing the root state of the application.
 */
export type RootState = ReturnType<typeof CollectionOfReducers>;
