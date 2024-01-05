import * as actionType from './actionTypes';

// ----------------------------------------------------------------------------------------------------
// Users
// ----------------------------------------------------------------------------------------------------

export const UsersGlobalReset = () => {
  return {
    type: actionType.ACTION_USERS_GLOBAL_RESET,
  };
};

export const UsersAddUser = (user: object) => {
  return {
    type: actionType.ACTION_USERS_ADD_USER,
    payload: user,
  };
};

export const UsersUpdateUser = (user: object) => {
  return {
    type: actionType.ACTION_USERS_UPDATE_USER,
    payload: user,
  };
};

export const UsersSetFollowers = (login: string, collection: any) => {
  return {
    type: actionType.ACTION_USERS_SET_FOLLOWERS,
    payload: {login, collection},
  };
};

export const UsersSetFollowing = (login: string, collection: any) => {
  return {
    type: actionType.ACTION_USERS_SET_FOLLOWING,
    payload: {login, collection},
  };
};
