import React, {useEffect} from 'react';
import {BackHandler, Alert, Dimensions, Image} from 'react-native';
import Screens from './screens'; // Add the correct import for Screens component
import Text from '../../__shared/components/Text';

/// *** Device Dimensions
const {width} = Dimensions.get('window');

interface SearchProps {
  navigation: any;
  route: any; // Adjust the type based on your navigation configuration
}

const Search: React.FC<SearchProps> = ({navigation}) => {
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
          style={{width: 22, height: 22, marginLeft: 15}}
          resizeMode="contain"
        />
      ),
      headerRight: () => null,
      headerShadowVisible: false,
    });

    // BackHandler
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      },
    );

    return () => backHandler.remove();
  }, [navigation]);

  return <Screens navigation={navigation} />;
};

export default Search;
