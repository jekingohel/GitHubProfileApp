import React, {PropsWithChildren, useRef, useState} from 'react';
import {
  AppContainer,
  Text,
  View,
  StatusMessage,
} from '../../../__shared/components';
import UserDetailsSkeleton from '../../__shared/components/UserDetails/skeleton';
import UserDetails from '../../__shared/components/UserDetails';
import {TextInput, TouchableOpacity} from 'react-native';
import Requests from '../../../requests';

type SectionProps = PropsWithChildren<{
  navigation: any;
  search_text?: string | number;
}>;

function screens({navigation}: SectionProps): React.JSX.Element {
  const [loading, setloading] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  const inputRef = useRef<TextInput>(null);
  const [inputVal, setInputVal] = useState('');
  const [isUserFetched, setUserFetched] = useState<boolean>(false);

  const onSubmit = () => {
    if (inputVal) {
      Requests.GetUser(inputVal)
        .then(res => {
          setloading(false);
          setRefreshing(false);
          setUserFetched(true);
          setData(res);
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
      setData(null);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    onSubmit();
  };

  const handleOnChange = (val: string) => {
    setInputVal(val);
    setUserFetched(false);
    setData(null);
  };

  return (
    <AppContainer scroll={false}>
      <View
        transparent
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        style={{
          padding: 10,
          columnGap: 15,
          borderBottomWidth: 1,
          borderBottomColor: '#F4F4F4',
        }}>
        <TextInput
          ref={inputRef}
          editable
          autoCapitalize="none"
          clearButtonMode="always"
          style={{
            backgroundColor: '#f4f4f4',
            fontSize: 15,
            borderWidth: 0,
            flexShrink: 1,
            flexGrow: 1,
            padding: 10,
            borderRadius: 10,
          }}
          onChangeText={handleOnChange}
          placeholder="Search User"
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            setloading(true);
            onSubmit();
          }}>
          <Text fontSize={18} lineHeight={30} color="#3399ff">
            Submit
          </Text>
        </TouchableOpacity>
      </View>
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
