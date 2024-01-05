import store from '../../../store';
import Requests from '../../../requests';
import {useCallback, useEffect, useState} from 'react';
import {UsersAddUser, UsersUpdateUser} from '../../../store/actions';
import {UserDetails as UserDetailTypes} from '../../../store/types/UserDetails.types';

interface UseItemProps {
  login: string;
}

interface UseItemResult {
  loading: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
}

/**
 * Hook for fetching and managing user details.
 * @param {object} props - The properties object.
 * @param {string} props.login - GitHub user login.
 * @returns {object} result - The result object.
 * @property {boolean} result.loading - Loading state.
 * @property {boolean} result.refreshing - Optional refreshing state.
 * @property {() => void} result.onRefresh - Optional function to handle refreshing.
 */

const useItem = ({login}: UseItemProps): UseItemResult => {
  // State to manage loading and refreshing states
  const [loading, setloading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  /**
   * Fetch user details based on the login.
   * @param {boolean} refresh - Whether to force a refresh.
   */
  const fetchItem = useCallback(
    async (refresh: boolean) => {
      // Get the users collection from the Redux store
      const users = store.getState().Users.collection;

      // Check if the user data is already available or needs refreshing
      const oldUsers = Object.keys(users)?.includes(login);

      if (!oldUsers || refresh) {
        try {
          // Fetch user data from the API using the provided login
          let result = await Requests.GetUser(login);

          if (result) {
            // Prepare the user data with additional properties
            const data: UserDetailTypes = {
              ...(result as UserDetailTypes),
              followers_list: [] as never[],
              following_list: [] as never[],
            };

            // Update the loading and refreshing states
            setloading(false);
            setRefreshing(false);

            // Dispatch actions to update the user data in the Redux store
            store.dispatch(UsersAddUser(data as UserDetailTypes));
            store.dispatch(UsersUpdateUser(data as UserDetailTypes));
          }
        } catch (err) {
          // Handle errors by updating loading and refreshing states
          setloading(false);
          setRefreshing(false);
          console.error(err);
        }
      } else {
        // If user data is already available, update loading and refreshing states
        setloading(false);
        setRefreshing(false);
      }
    },
    [login],
  );

  /**
   * Function to handle refreshing of user data.
   */
  const onRefresh = () => {
    setRefreshing(true);
    fetchItem(true);
  };

  // UseEffect to fetch user data when the component mounts
  useEffect(() => {
    fetchItem(false);
  }, [fetchItem]);

  // Return the result object with loading, refreshing, and onRefresh
  return {loading, refreshing, onRefresh};
};

export default useItem;
