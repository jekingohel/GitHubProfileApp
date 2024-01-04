import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {FollowersFollowing, Search, UserProfile} from '../features';

const Stack = createStackNavigator();
const FollowersFollowingStack = createStackNavigator();
const ProfileStack = createStackNavigator();

interface intialProps {
  navigation?: any;
  route?: any; // Adjust the type based on your navigation configuration
}

const FollowersFollowingNavigator: React.FC<intialProps> = ({route}) => {
  return (
    <FollowersFollowingStack.Navigator
      initialRouteName="FollowersFollowing Screen"
      screenOptions={{headerShown: false}}>
      <FollowersFollowingStack.Screen
        name="FollowersFollowing Screen"
        component={FollowersFollowing}
        initialParams={route?.params}
      />
      <FollowersFollowingStack.Group>
        <FollowersFollowingStack.Screen
          name="UserProfile"
          component={UserProfile}
        />
      </FollowersFollowingStack.Group>
    </FollowersFollowingStack.Navigator>
  );
};

const ProfileNavigator: React.FC<intialProps> = ({route}) => {
  return (
    <ProfileStack.Navigator
      initialRouteName="UserProfile Screen"
      screenOptions={{headerShown: false}}>
      <ProfileStack.Screen
        name="UserProfile Screen"
        component={FollowersFollowing}
        initialParams={route?.params}
      />
      <ProfileStack.Group>
        <ProfileStack.Screen
          name="FollowersFollowing Screen"
          component={UserProfile}
        />
      </ProfileStack.Group>
    </ProfileStack.Navigator>
  );
};

function AppNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="UserProfile" component={ProfileNavigator} />
          <Stack.Screen
            name="FollowersFollowing"
            component={FollowersFollowingNavigator}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
