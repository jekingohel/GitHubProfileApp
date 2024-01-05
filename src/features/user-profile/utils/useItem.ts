import Requests from '../../../requests';
import {useCallback, useEffect, useState} from 'react';

interface UseItemProps {
  login: string;
}

interface UseItemResult {
  data?: any; // Change the type to the actual type of your data
  loading: boolean;
  refreshing?: boolean;
  onRefresh?: () => void;
}

const useItem = ({login}: UseItemProps): UseItemResult => {
  const [data, setData] = useState<any>(); // Change the type to the actual type of your data
  const [loading, setloading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchItem = useCallback(async () => {
    try {
      let result;
      result = await Requests.GetUser(login);
      setloading(false);
      setRefreshing(false);
      setData(result);
    } catch (err) {
      setloading(false);
      setRefreshing(false);
      console.error(err);
    }
  }, [login]);

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
