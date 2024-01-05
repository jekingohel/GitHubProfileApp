import store from '../../../store';
import Requests from '../../../requests';
import {useCallback, useEffect, useState} from 'react';
import {UsersSetFollowers, UsersSetFollowing} from '../../../store/actions';

/**
 * Properties for the useItem hook.
 */
interface UseItemProps {
  type?: 'followers' | 'following';
  login: string;
}

/**
 * Result returned by the useItem hook.
 */
interface UseItemResult {
  loading: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
}

/**
 * useItem hook for fetching followers or following data for a user.
 * @param {UseItemProps} param0 - Properties object for the hook.
 * @returns {UseItemResult} - Result object with loading and refreshing states.
 */
const useItem = ({type, login}: UseItemProps): UseItemResult => {
  const [loading, setloading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  // Function to fetch followers or following data
  const fetchItem = useCallback(
    async (refresh: boolean) => {
      const users = store.getState().Users.collection;
      const followers_list = users[login]?.followers_list;
      const following_list = users[login]?.following_list;
      const oldFollowers = followers_list?.length !== 0;
      const oldFollowing = following_list?.length !== 0;

      try {
        // Fetch followers data if not present or manual refresh requested
        if (!oldFollowers || refresh) {
          if (type === 'followers') {
            let result = await Requests.GetFollowers(login);
            result &&
              store.dispatch(UsersSetFollowers(login as string, result as []));
          }
        }

        // Fetch following data if not present or manual refresh requested
        if (!oldFollowing || refresh) {
          if (type === 'following') {
            let result = await Requests.GetFollowing(login);
            result &&
              store.dispatch(UsersSetFollowing(login as string, result as []));
          }
        }

        // Set loading and refreshing states to false after successful fetch
        setloading(false);
        setRefreshing(false);
      } catch (err) {
        // Handle errors by setting loading and refreshing states to false and logging the error
        setloading(false);
        setRefreshing(false);
        console.error(err);
      }
    },
    [type, login],
  );

  // Function to manually trigger a refresh
  const onRefresh = () => {
    setRefreshing(true);
    fetchItem(true);
  };

  // UseEffect to fetch data when the component mounts
  useEffect(() => {
    fetchItem(false);
  }, [fetchItem]);

  // Return the result object with loading and refreshing states and the onRefresh function
  return {loading, refreshing, onRefresh};
};

export default useItem;
