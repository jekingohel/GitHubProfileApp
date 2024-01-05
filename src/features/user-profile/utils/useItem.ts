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

const useItem = ({login}: UseItemProps): UseItemResult => {
  const [loading, setloading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchItem = useCallback(
    async (refresh: boolean) => {
      const users = store.getState().Users.collection;
      const oldUsers = Object.keys(users)?.includes(login);
      if (!oldUsers || refresh) {
        try {
          let result = await Requests.GetUser(login);
          if (result) {
            const data: UserDetailTypes = {
              ...(result as UserDetailTypes),
              followers_list: [] as never[],
              following_list: [] as never[],
            };
            setloading(false);
            setRefreshing(false);
            store.dispatch(UsersAddUser(data as UserDetailTypes));
            store.dispatch(UsersUpdateUser(data as UserDetailTypes));
          }
        } catch (err) {
          setloading(false);
          setRefreshing(false);
          console.error(err);
        }
      } else {
        setloading(false);
        setRefreshing(false);
      }
    },
    [login],
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
