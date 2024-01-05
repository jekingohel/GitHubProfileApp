import React, {PropsWithChildren, useRef, useState} from 'react';
import {
  AppContainer,
  StatusMessage,
  SearchBar,
} from '../../../__shared/components';
import UserDetailsSkeleton from '../../__shared/components/UserDetails/skeleton';
import UserDetails from '../../__shared/components/UserDetails';
import {TextInput} from 'react-native';
import Requests from '../../../requests';
import store from '../../../store';
import {UsersAddUser, UsersUpdateUser} from '../../../store/actions';
import {UserDetails as UserDetailTypes} from '../../../store/types/UserDetails.types';

type SectionProps = PropsWithChildren<{
  navigation: any;
  search_text?: string | number;
}>;

function screens({navigation}: SectionProps): React.JSX.Element {
  const [loading, setloading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [inputVal, setInputVal] = useState('');

  const inputRef = useRef<TextInput>(null);
  const [isUserFetched, setUserFetched] = useState<boolean>(false);

  const onSubmit = (refresh: boolean) => {
    const users = store.getState().Users.collection;
    const oldUsers = Object.keys(users)?.includes(inputVal);
    if (inputVal) {
      if (!oldUsers || refresh) {
        Requests.GetUser(inputVal)
          .then(res => {
            if (res) {
              const result: UserDetailTypes = {
                ...(res as UserDetailTypes),
                followers_list: [],
                following_list: [],
              };
              setloading(false);
              setRefreshing(false);
              setUserFetched(true);
              setData(result);
              store.dispatch(UsersAddUser(result as UserDetailTypes));
              store.dispatch(UsersUpdateUser(result as UserDetailTypes));
            }
          })
          .catch(err => {
            setloading(false);
            setRefreshing(false);
            setData(null);
            setUserFetched(true);
          });
      } else {
        setloading(false);
        setRefreshing(false);
        setUserFetched(true);
        setData(users[inputVal]);
      }
    } else {
      setloading(false);
      setRefreshing(false);
      setData(null);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    onSubmit(true);
  };

  const handleOnChange = (val: string) => {
    setInputVal(val);
    setUserFetched(false);
    setData(null);
  };

  return (
    <AppContainer scroll={false}>
      <SearchBar
        handleOnChange={handleOnChange}
        onSubmit={() => {
          setloading(true);
          onSubmit(false);
        }}
        inputRef={inputRef}
      />
      {loading && <UserDetailsSkeleton />}
      {!loading && isUserFetched && data && (
        <UserDetails
          data={data}
          navigation={navigation}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
      {!loading && isUserFetched && data === null && inputVal !== '' && (
        <StatusMessage
          title="Not Found"
          description="User could not be found. Please double-check the username and try again."
        />
      )}
      {!loading && !isUserFetched && data === null && (
        <StatusMessage
          title="Find GitHub Users."
          description="Search GitHub user and discover profiles efficiently."
        />
      )}
    </AppContainer>
  );
}

export default screens;
