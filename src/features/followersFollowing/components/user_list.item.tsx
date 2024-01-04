import React, {PropsWithChildren} from 'react';
import {Avatar, Text, View} from '../../../__shared/components';
import {TouchableOpacity} from 'react-native';

type propsType = PropsWithChildren<{
  data?: any;
  navigation?: any;
}>;

function UserItem({data = null, navigation}: propsType): React.JSX.Element {
  const viewUserDetails = () => {
    navigation.navigate('UserProfile', {login: data?.login});
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={viewUserDetails}
      style={{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 15,
        justifyContent: 'flex-start',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F4F4F4',
      }}>
      <Avatar
        source={data?.avatar_url}
        rounded
        title={data?.login}
        size="medium"
      />
      <Text
        fontSize={20}
        lineHeight={24}
        fontWeight="300"
        color="rgb(31,35,40)">
        {data?.login}
      </Text>
    </TouchableOpacity>
  );
}

export default UserItem;
