import {combineReducers} from 'redux';
import Users from './Users';

const CollectionOfReducers = combineReducers({
  Users: Users,
});

export default CollectionOfReducers;
