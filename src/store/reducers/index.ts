import {combineReducers} from 'redux';
import Users from './Users';

const CollectionOfReducers = combineReducers({
  Users: Users,
});

export default CollectionOfReducers;

export type RootState = ReturnType<typeof CollectionOfReducers>;
