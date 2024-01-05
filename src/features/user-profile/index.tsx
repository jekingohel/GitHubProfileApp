import React, {useEffect} from 'react';
import {BackHandler} from 'react-native';
import Screens from './screens';
import Text from '../../__shared/components/Text';

// Define prop types for UserProfile component
interface propsType {
  navigation?: any;
  route: any; // Adjust the type based on your navigation configuration
}

/**
 * UserProfile component to display user profile information.
 * @param {propsType} props - The properties object.
 * @returns {JSX.Element} - Rendered component.
 */
const UserProfile: React.FC<propsType> = ({navigation, route}) => {
  useEffect(() => {
    // Set navigation options for the screen
    navigation.setOptions({
      headerShown: true,
      title: 'UserProfile',
      headerBackTitle: 'Go back',
      headerTitle: () => (
        // Customize the header title with the user's login name
        <Text fontSize={20} lineHeight={30}>
          {route?.params?.login}
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

export default UserProfile;
