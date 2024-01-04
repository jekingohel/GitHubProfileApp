import React, {useEffect, useRef, useState} from 'react';
import {
  TouchableOpacity,
  BackHandler,
  Alert,
  TextInput,
  Dimensions,
} from 'react-native';
import Screens from './screens'; // Add the correct import for Screens component
import Text from '../../__shared/components/Text';

/// *** Device Dimensions
const {width} = Dimensions.get('window');

interface propsType {
  navigation?: any;
  route: any; // Adjust the type based on your navigation configuration
}

const FollowersFollowing: React.FC<propsType> = ({navigation}) => {
  const inputRef = useRef<TextInput>(null);
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: () => (
        <Text fontSize={20} lineHeight={30}>
          Users
        </Text>
      ),
      // headerLeft: () => (
      //   <TouchableOpacity
      //     activeOpacity={0.5}
      //     onPress={() => {
      //       if (inputRef?.current) {
      //         setInputVal('');
      //         inputRef?.current?.clear();
      //       }
      //     }}
      //     style={{
      //       marginRight: 10,
      //       alignItems: 'center',
      //       justifyContent: 'center',
      //       flexDirection: 'row',
      //     }}>
      //     <Text fontSize={20} lineHeight={30} color="#3399ff">
      //       Cancel
      //     </Text>
      //   </TouchableOpacity>
      // ),
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

  return <Screens navigation={navigation} />;
};

export default FollowersFollowing;
