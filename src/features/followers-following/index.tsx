import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import Screens from './screens';
import Text from '../../__shared/components/Text';

/**
 * Prop types for the FollowersFollowing component.
 */
interface propsType {
  navigation?: any;
  route: any;
}

/**
 * FollowersFollowing component to display followers or following information.
 * @param {propsType} props - The properties object.
 * @returns {JSX.Element} - Rendered component.
 */
const FollowersFollowing: React.FC<propsType> = ({navigation, route}) => {
  useEffect(() => {
    // Set navigation options for the screen
    navigation.setOptions({
      headerShown: true,
      title: 'FollowersFollowing',
      headerBackTitle: 'Go back',
      headerTitle: () => (
        // Customize the header title with the type of followers/following
        <Text
          fontSize={20}
          lineHeight={30}
          style={{textTransform: 'capitalize'}}>
          {route?.params?.type}
        </Text>
      ),
      headerRight: () => null,
    });

    // BackHandler for handling the hardware back press
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.goback();
        return true;
      },
    );

    // Cleanup function to remove the event listener when the component unmounts
    return () => backHandler.remove();
  }, [navigation]);

  // Render the Screens component with navigation and params
  return <Screens navigation={navigation} params={route?.params} />;
};

export default FollowersFollowing;
