import Requests from '../../../requests';
import {useEffect, useState} from 'react';

interface UseItemProps {
  login: string;
}

interface UseItemResult {
  data?: any; // Change the type to the actual type of your data
  loading: boolean;
}

const useItem = ({login}: UseItemProps): UseItemResult => {
  const [data, setData] = useState<any>();
  const [loading, setloading] = useState<boolean>(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        let result;
        result = await Requests.GetUser(login);
        setloading(false);
        setData(result);
      } catch (err) {
        setloading(false);
        console.error(err);
      }
    };

    fetchItem();
  }, [login]);

  return {data, loading};
};

export default useItem;
