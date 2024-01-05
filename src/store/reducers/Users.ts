import * as actionType from '../actions/actionTypes';
import StoreTemplate from '../StoreTemplate';
import UserDetails from '../types/UserDetails.types';

interface UsersState {
  collection: Record<string, UserDetails>;
}

const container: Record<
  string,
  (state: UsersState, payload: any) => UsersState
> = {};

const defaultState = function (): UsersState {
  return {
    collection: defaultUsers(),
  };
};

const defaultUsers = function (): Record<string, UserDetails> {
  return {};
};

const Users = StoreTemplate(defaultState(), container);

container[actionType.ACTION_USERS_GLOBAL_RESET] = function (): UsersState {
  return defaultState();
};

container[actionType.ACTION_USERS_ADD_USER] = function (
  state: UsersState,
  payload,
): UsersState {
  const oldUser = Object.keys(state.collection)?.includes(payload?.login);
  !oldUser && (state.collection[payload?.login] = payload);
  return {
    ...state,
  };
};

container[actionType.ACTION_USERS_UPDATE_USER] = function (
  state: UsersState,
  payload,
): UsersState {
  state.collection[payload?.login] = payload;
  return {
    ...state,
  };
};

container[actionType.ACTION_USERS_SET_FOLLOWERS] = function (
  state: UsersState,
  payload,
): UsersState {
  state.collection[payload?.login]['followers_list'] = payload?.collection;
  return {
    ...state,
  };
};

container[actionType.ACTION_USERS_SET_FOLLOWING] = function (
  state: UsersState,
  payload,
): UsersState {
  state.collection[payload?.login]['following_list'] = payload?.collection;
  return {
    ...state,
  };
};

export default Users;
