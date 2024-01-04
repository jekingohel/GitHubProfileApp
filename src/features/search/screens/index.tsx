import React, {PropsWithChildren, useRef, useState} from 'react';
import {AppContainer, Text, View} from '../../../__shared/components';
import Skeleton from '../components/user_profile.skeleton';
import UserDetails from '../components/user_profile.details';
import {TextInput, TouchableOpacity} from 'react-native';
import Requests from '../../../requests';

type SectionProps = PropsWithChildren<{
  navigation: any;
  search_text?: string | number;
}>;

function screens({navigation}: SectionProps): React.JSX.Element {
  const [loading, setloading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  const inputRef = useRef<TextInput>(null);
  const [inputVal, setInputVal] = useState('');

  const onSubmit = () => {
    setloading(true);
    if (inputVal) {
      Requests.GetUser(inputVal)
        .then(res => {
          setloading(false);
          setData(res);
        })
        .catch(err => {
          setloading(false);
          console.log(err);
        });
    } else {
      setloading(false);
      setData(null);
    }
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
          clearButtonMode="always"
          style={{
            backgroundColor: '#e6e6e6',
            fontSize: 15,
            borderWidth: 0,
            flexShrink: 1,
            flexGrow: 1,
            padding: 10,
            borderRadius: 10,
          }}
          onChangeText={val => setInputVal(val)}
          placeholder="Search GitHub"
        />
        <TouchableOpacity activeOpacity={0.5} onPress={onSubmit}>
          <Text fontSize={20} lineHeight={30} color="#3399ff">
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <Skeleton />
      ) : (
        <UserDetails data={data} navigation={navigation} />
      )}
    </AppContainer>
  );
}

export default screens;
