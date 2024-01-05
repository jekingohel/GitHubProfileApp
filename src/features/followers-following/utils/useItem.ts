import Requests from '../../../requests';
import {useCallback, useEffect, useState} from 'react';

interface UseItemProps {
  type?: 'followers' | 'following';
  login: string;
}

interface UseItemResult {
  data?: any; // Change the type to the actual type of your data
  loading: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
}

const useItem = ({type, login}: UseItemProps): UseItemResult => {
  const [data, setData] = useState<any>(); // Change the type to the actual type of your data
  const [loading, setloading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchItem = useCallback(async () => {
    try {
      let result;
      if (type === 'followers') {
        result = await Requests.GetFollowers(login);
      } else {
        result = await Requests.GetFollowing(login);
      }
      setloading(false);
      setRefreshing(false);
      setData(result);
    } catch (err) {
      setloading(false);
      setRefreshing(false);
      console.error(err);
    }
  }, [type, login]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchItem();
  };

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  return {data, loading, refreshing, onRefresh};
};

export default useItem;
