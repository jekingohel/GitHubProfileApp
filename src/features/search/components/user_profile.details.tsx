import React, {PropsWithChildren} from 'react';
import {Image, StyleSheet} from 'react-native';

import {
  Avatar,
  Container,
  ScrollableContainer,
  Text,
  View,
} from '../../../__shared/components';
import TextWithImage from './TextWithImage';
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
    if (type === 'followers') {
      navigation.navigate('FollowersFollowing', {url: data?.followers_url});
    } else {
      navigation.navigate('FollowersFollowing', {url: data?.following_url});
    }
  };

  if (!data) {
    return (
      <View
        transparent
        alignItems="center"
        justifyContent="center"
        style={{flex: 1, paddingHorizontal: 30}}>
        <Text
          fontSize={24}
          lineHeight={30}
          fontWeight="600"
          align="center"
          color="rgb(31,35,40)">
          Find GitHub Users.
        </Text>
        <Text
          fontSize={18}
          lineHeight={24}
          fontWeight="300"
          align="center"
          color="rgb(101,109,118)">
          Search all GitHub for people and discover profiles efficiently.
        </Text>
      </View>
    );
  } else {
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
              <Text
                fontSize={16}
                lineHeight={24}
                color="font-size: 16px, line-height: 24px, color: rgb(31,35,40)">
                {data?.bio}
              </Text>
            )}
            {data?.email && (
              <TextWithImage
                source={require('../../../images/icon-email.png')}
                imageSize={[16, 16]}
                text={data?.email}
                fontSize={15}
                lineHeight={21}
                color="rgb(31,35,40)"
              />
            )}
            {data?.location && (
              <TextWithImage
                source={require('../../../images/icon-location.png')}
                imageSize={[16, 16]}
                text={data?.location}
                fontSize={15}
                lineHeight={21}
                color="rgb(31,35,40)"
              />
            )}
            {data?.company && (
              <TextWithImage
                source={require('../../../images/icon-company.png')}
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
                onPress={() => viewFollowersFollowing('followers')}
              />
              <ActionBtn
                title={FormatNumber(data?.following)}
                subTitle="following"
                onPress={() => viewFollowersFollowing('following')}
              />
            </View>
          </View>
        </Container>
      </ScrollableContainer>
    );
  }
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
