import React, {PropsWithChildren} from 'react';
import {Image, StyleSheet} from 'react-native';

import {
  Avatar,
  Container,
  ScrollableContainer,
  Text,
  View,
  TextWithIcon,
} from '../../../__shared/components';
import ActionBtn from './action.button';
import FormatNumber from '../../../__shared/utils/FormatNumber';

type propsType = PropsWithChildren<{
  data: any | undefined;
  navigation?: any;
}>;

function UserDetails({
  data = undefined,
  navigation,
}: propsType): React.JSX.Element {
  const viewFollowersFollowing = (type: string) => {
    const userparams = {type: type, login: data?.login};
    if (type === 'followers') {
      navigation.navigate('FollowersFollowing', userparams);
    } else {
      navigation.navigate('FollowersFollowing', userparams);
    }
  };
  return (
    <ScrollableContainer contentInsetAdjustmentBehavior="automatic">
      <Container>
        <View transparent style={styles.container}>
          <View transparent style={styles.avatarContainer}>
            <Avatar
              source={data?.avatar_url}
              customSize={5}
              rounded
              title={data?.name}
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
          {data?.bio && (
            <Text fontSize={16} lineHeight={24} color="rgb(31,35,40)">
              {data?.bio}
            </Text>
          )}
          {data?.email && (
            <TextWithIcon
              iconSource={require('../../../images/icon-email.png')}
              imageSize={[16, 16]}
              text={data?.email}
              fontSize={15}
              lineHeight={21}
              color="rgb(31,35,40)"
            />
          )}
          {data?.location && (
            <TextWithIcon
              iconSource={require('../../../images/icon-location.png')}
              imageSize={[16, 16]}
              text={data?.location}
              fontSize={15}
              lineHeight={21}
              color="rgb(31,35,40)"
            />
          )}
          {data?.company && (
            <TextWithIcon
              iconSource={require('../../../images/icon-company.png')}
              imageSize={[16, 16]}
              text={data?.company}
              fontSize={15}
              lineHeight={21}
              color="rgb(31,35,40)"
            />
          )}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 10,
            }}>
            <Image
              source={require('../../../images/icon-users.png')}
              style={{width: 16, height: 16}}
              resizeMode="contain"
            />
            <ActionBtn
              title={FormatNumber(data?.followers)}
              subTitle="followers"
              onPress={() =>
                data?.followers > 0 && viewFollowersFollowing('followers')
              }
            />
            <ActionBtn
              title={FormatNumber(data?.following)}
              subTitle="following"
              onPress={() =>
                data?.following > 0 && viewFollowersFollowing('following')
              }
            />
          </View>
        </View>
      </Container>
    </ScrollableContainer>
  );
}

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
