import Requests from '../../../requests';
import {useEffect, useState} from 'react';

interface UseItemProps {
  type?: 'followers' | 'following';
  login: string;
}

interface UseItemResult {
  data?: any; // Change the type to the actual type of your data
  loading: boolean;
}

const useItem = ({type, login}: UseItemProps): UseItemResult => {
  const [data, setData] = useState<any>(); // Change the type to the actual type of your data
  const [loading, setloading] = useState<boolean>(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        let result;
        if (type === 'followers') {
          result = await Requests.GetFollowers(login);
        } else {
          result = await Requests.GetFollowing(login);
        }
        setloading(false);
        setData(result);
      } catch (err) {
        setloading(false);
        console.error(err);
      }
    };

    fetchItem();
  }, [type, login]);

  return {data, loading};
};

export default useItem;
