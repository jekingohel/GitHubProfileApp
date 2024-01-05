import store from '../../../store';
import Requests from '../../../requests';
import {useCallback, useEffect, useState} from 'react';
import {UsersSetFollowers, UsersSetFollowing} from '../../../store/actions';

interface UseItemProps {
  type?: 'followers' | 'following';
  login: string;
}

interface UseItemResult {
  loading: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
}

const useItem = ({type, login}: UseItemProps): UseItemResult => {
  const [loading, setloading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchItem = useCallback(
    async (refresh: boolean) => {
      const users = store.getState().Users.collection;
      const followers_list = users[login]?.followers_list;
      const following_list = users[login]?.following_list;
      const oldFollowers = followers_list?.length !== 0;
      const oldFollowing = following_list?.length !== 0;

      try {
        if (!oldFollowers || refresh) {
          if (type === 'followers') {
            let result = await Requests.GetFollowers(login);
            result &&
              store.dispatch(UsersSetFollowers(login as string, result as []));
          }
        }

        if (!oldFollowing || refresh) {
          if (type === 'following') {
            let result = await Requests.GetFollowing(login);
            result &&
              store.dispatch(UsersSetFollowing(login as string, result as []));
          }
        }

        setloading(false);
        setRefreshing(false);
      } catch (err) {
        setloading(false);
        setRefreshing(false);
        console.error(err);
      }
    },
    [type, login],
  );

  const onRefresh = () => {
    setRefreshing(true);
    fetchItem(true);
  };

  useEffect(() => {
    fetchItem(false);
  }, [fetchItem]);

  return {loading, refreshing, onRefresh};
};

export default useItem;
