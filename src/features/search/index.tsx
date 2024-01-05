import React, {useEffect} from 'react';
import {BackHandler, Alert, Image} from 'react-native';
import Screens from './screens'; // Add the correct import for Screens component
import Text from '../../__shared/components/Text';

interface SearchProps {
  navigation: any;
  route: any;
}

/**
 * Search component for displaying and searching users.
 * @param {SearchProps} props - The properties object.
 * @returns {JSX.Element} - Rendered component.
 */
const Search: React.FC<SearchProps> = ({navigation}) => {
  // Set navigation options for the screen
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Search',
      headerBackTitle: 'Go back',
      headerTitle: () => (
        <Text
          fontSize={20}
          lineHeight={30}
          color="rgb(31,35,40)"
          fontWeight="500">
          Search Users
        </Text>
      ),
      headerLeft: () => (
        <Image
          source={require('../../images/logo-github.png')}
          style={{width: 32, height: 32, marginLeft: 15}}
          resizeMode="contain"
        />
      ),
      headerRight: () => null, // No header right component
      headerShadowVisible: false, // Disable header shadow
    });

    // BackHandler setup
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        // Show confirmation alert on back press
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true; // Prevent default behavior
      },
    );
    // Cleanup event listener on component unmount
    return () => backHandler.remove();
  }, [navigation]);
  // Render the Screens component with the navigation prop
  return <Screens navigation={navigation} />;
};

export default Search;
