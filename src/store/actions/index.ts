import * as actionType from 'store/actions/actionTypes';

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

export const UsersSetFollowers = (collection: any) => {
  return {
    type: actionType.ACTION_USERS_SET_FOLLOWERS,
    payload: collection,
  };
};

export const UsersSetFollowing = (collection: any) => {
  return {
    type: actionType.ACTION_USERS_SET_FOLLOWING,
    payload: collection,
  };
};
