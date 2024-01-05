import * as actionType from '../actions/actionTypes';
import StoreTemplate from '../StoreTemplate';

interface User {
  workspace_user_id: string;
  user_id?: string; // Adjust the types based on your actual user structure
  email?: string;
  role?: string;
  // Add other properties based on your actual user structure
}

interface UsersState {
  collection: Record<string, User>;
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

const defaultUsers = function (): Record<string, User> {
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
  return {
    ...state,
  };
};

container[actionType.ACTION_USERS_UPDATE_USER] = function (
  state: UsersState,
  payload,
): UsersState {
  return {
    ...state,
  };
};

container[actionType.ACTION_USERS_SET_FOLLOWERS] = function (
  state: UsersState,
  payload,
): UsersState {
  return {
    ...state,
  };
};

container[actionType.ACTION_USERS_SET_FOLLOWING] = function (
  state: UsersState,
  payload,
): UsersState {
  return {
    ...state,
  };
};

export default Users;
