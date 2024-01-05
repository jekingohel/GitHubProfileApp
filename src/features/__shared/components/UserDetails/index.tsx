import React, {PropsWithChildren} from 'react';
import {Image, StyleSheet} from 'react-native';

import {
  Avatar,
  Container,
  Text,
  View,
  TextWithIcon,
  ActionButton,
  ScrollableContainer,
} from '../../../../__shared/components';

import FormatNumber from '../../../../__shared/utils/FormatNumber';
import {UserDetails as UserDetailTypes} from '../../../../store/types/UserDetails.types';

type propsType = PropsWithChildren<{
  data?: UserDetailTypes;
  navigation?: any;
  refreshing?: boolean;
  onRefresh?: () => void;
  onPress?: () => void;
}>;

/**
 * JSX Component representing user details.
 * @component
 *
 * @param {propsType} props - The component props.
 * @param {UserDetailTypes} props.data - User details data.
 * @param {any} props.navigation - Navigation object.
 * @param {boolean} props.refreshing - Indicates if data is refreshing.
 * @param {() => void} props.onRefresh - Callback for refresh action.
 * @param {() => void} props.onPress - Callback for press action.
 *
 * @returns {React.JSX.Element} JSX element representing user details.
 */

function UserDetails({
  data = undefined,
  navigation,
  refreshing = false,
  onRefresh = () => {},
}: propsType): React.JSX.Element {
  // Extract followers and following counts from user data
  const followers = data?.followers || 0;
  const following = data?.following || 0;

  /**
   * Navigate to Followers or Following screen based on type.
   * @param {string} type - Type of navigation ('followers' or 'following').
   * @returns {void}
   */
  const viewFollowersFollowing = (type: string) => {
    const userparams = {type: type, login: data?.login};
    if (type === 'followers') {
      navigation.navigate('UserList', userparams);
    } else {
      navigation.navigate('UserList', userparams);
    }
  };
  return (
    // Scrollable container with refresh functionality
    <ScrollableContainer
      refresh
      contentInsetAdjustmentBehavior="automatic"
      refreshing={refreshing}
      onRefresh={onRefresh}>
      <Container>
        {/* Container for user details */}
        <View transparent style={styles.container}>
          {/* Avatar and user details */}
          <View transparent style={styles.avatarContainer}>
            <Avatar
              source={data?.avatar_url || null}
              customSize={5}
              rounded
              title={data?.name || ''}
              size="large"
            />
            <View transparent>
              <Text
                fontSize={24}
                lineHeight={30}
                fontWeight="600"
                color="rgb(31,35,40)">
                {data?.name}
              </Text>
              <Text
                fontSize={20}
                lineHeight={24}
                fontWeight="300"
                color="rgb(101,109,118)">
                {data?.login}
              </Text>
            </View>
          </View>

          {/* User bio, email, location, and company */}
          {data?.bio && (
            <Text fontSize={16} lineHeight={24} color="rgb(31,35,40)">
              {data?.bio}
            </Text>
          )}
          {data?.email && (
            <TextWithIcon
              iconSource={require('../../../../images/icon-email.png')}
              imageSize={[16, 16]}
              text={data?.email}
              fontSize={15}
              lineHeight={21}
              color="rgb(31,35,40)"
            />
          )}
          {data?.location && (
            <TextWithIcon
              iconSource={require('../../../../images/icon-location.png')}
              imageSize={[16, 16]}
              text={data?.location}
              fontSize={15}
              lineHeight={21}
              color="rgb(31,35,40)"
            />
          )}
          {data?.company && (
            <TextWithIcon
              iconSource={require('../../../../images/icon-company.png')}
              imageSize={[16, 16]}
              text={data?.company}
              fontSize={15}
              lineHeight={21}
              color="rgb(31,35,40)"
            />
          )}

          {/* Followers and following counts with icons */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 10,
            }}>
            <Image
              source={require('../../../../images/icon-users.png')}
              style={{width: 16, height: 16}}
              resizeMode="contain"
            />
            <ActionButton
              title={FormatNumber(followers)}
              subTitle="followers"
              onPress={() =>
                followers > 0 && viewFollowersFollowing('followers')
              }
            />
            <ActionButton
              title={FormatNumber(following)}
              subTitle="following"
              onPress={() =>
                following > 0 && viewFollowersFollowing('following')
              }
            />
          </View>
        </View>
      </Container>
    </ScrollableContainer>
  );
}

// Styles for the UserDetails component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    rowGap: 8,
  },
  avatarContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 15,
    justifyContent: 'flex-start',
    marginBottom: 15,
  },
});

export default UserDetails;
