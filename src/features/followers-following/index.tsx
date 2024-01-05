import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import Screens from './screens';
import Text from '../../__shared/components/Text';

interface propsType {
  navigation?: any;
  route: any; // Adjust the type based on your navigation configuration
}

const FollowersFollowing: React.FC<propsType> = ({navigation, route}) => {
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'FollowersFollowing',
      headerBackTitle: 'Go back',
      headerTitle: () => (
        <Text
          fontSize={20}
          lineHeight={30}
          style={{textTransform: 'capitalize'}}>
          {route?.params?.type}
        </Text>
      ),
      headerRight: () => null,
    });

    // BackHandler
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.goback();
        return true;
      },
    );

    return () => backHandler.remove();
  }, [navigation]);

  return <Screens navigation={navigation} params={route?.params} />;
};

export default FollowersFollowing;
