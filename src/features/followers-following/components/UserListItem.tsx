import React, {PropsWithChildren} from 'react';
import {Avatar, Text} from '../../../__shared/components';
import {TouchableOpacity} from 'react-native';

type propsType = PropsWithChildren<{
  data?: any;
  navigation?: any;
}>;

/**
 * UserItem component to display a single user item with avatar and login name.
 * @param {PropsWithChildren} props - Properties for the component.
 * @param {any} props.data - User data containing information like login and avatar URL.
 * @param {any} props.navigation - Navigation object for navigating to user profile screen.
 * @returns {React.JSX.Element} - JSX element representing a user item.
 */
function UserItem({data = null, navigation}: propsType): React.JSX.Element {
  // Function to navigate to the user profile screen when the item is pressed
  const viewUserDetails = () => {
    navigation.navigate('UserProfileScreen', {login: data?.login});
  };
  return (
    // Touchable component for interaction
    <TouchableOpacity
      testID="user-item-touchable"
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
      {/* Avatar component displaying the user's avatar or initials */}
      <Avatar
        source={data?.avatar_url}
        rounded
        title={data?.login}
        size="medium"
      />
      {/* Text component displaying the user's login name */}
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
