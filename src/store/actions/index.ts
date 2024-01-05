import * as actionType from './actionTypes';

// ----------------------------------------------------------------------------------------------------
// Users
// ----------------------------------------------------------------------------------------------------

/**
 * Action creator to reset global users state.
 * @returns {Object} Action object.
 */
export const UsersGlobalReset = () => {
  return {
    type: actionType.ACTION_USERS_GLOBAL_RESET,
  };
};

/**
 * Action creator to add a user to the state.
 * @param {Object} user - User object.
 * @returns {Object} Action object with payload.
 */
export const UsersAddUser = (user: object) => {
  return {
    type: actionType.ACTION_USERS_ADD_USER,
    payload: user,
  };
};

/**
 * Action creator to update a user in the state.
 * @param {Object} user - User object.
 * @returns {Object} Action object with payload.
 */
export const UsersUpdateUser = (user: object) => {
  return {
    type: actionType.ACTION_USERS_UPDATE_USER,
    payload: user,
  };
};

/**
 * Action creator to set followers for a user.
 * @param {string} login - User login.
 * @param {Array} collection - Followers collection.
 * @returns {Object} Action object with payload.
 */
export const UsersSetFollowers = (login: string, collection: any) => {
  return {
    type: actionType.ACTION_USERS_SET_FOLLOWERS,
    payload: {login, collection},
  };
};

/**
 * Action creator to set following for a user.
 * @param {string} login - User login.
 * @param {Array} collection - Following collection.
 * @returns {Object} Action object with payload.
 */
export const UsersSetFollowing = (login: string, collection: any) => {
  return {
    type: actionType.ACTION_USERS_SET_FOLLOWING,
    payload: {login, collection},
  };
};
