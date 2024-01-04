import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {FollowersFollowing, Search, UserProfile} from '../features';

const Stack = createStackNavigator();

function AppNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen
            name="FollowersFollowing"
            component={FollowersFollowing}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
