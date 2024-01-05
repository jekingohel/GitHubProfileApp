import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {FollowersFollowing, Search, UserProfile} from '../features';

const Stack = createStackNavigator();
const UserListStack = createStackNavigator();
const UserProfileStack = createStackNavigator();

interface InitialProps {
  navigation?: any;
  route?: any; // Adjust the type based on your navigation configuration
}

const UserListNavigator: React.FC<InitialProps> = ({route}) => {
  return (
    <UserListStack.Navigator
      initialRouteName="UserListScreen"
      screenOptions={{headerShown: false}}>
      <UserListStack.Group>
        <UserListStack.Screen
          name="UserListScreen"
          component={FollowersFollowing}
          initialParams={route?.params}
        />
        <UserListStack.Screen
          name="UserProfileScreen"
          component={UserProfileNavigator}
          initialParams={route?.params}
        />
      </UserListStack.Group>
    </UserListStack.Navigator>
  );
};

const UserProfileNavigator: React.FC<InitialProps> = ({route}) => {
  return (
    <UserProfileStack.Navigator
      initialRouteName="UserProfile"
      screenOptions={{headerShown: false}}>
      <UserProfileStack.Group>
        <UserProfileStack.Screen
          name="UserProfile"
          component={UserProfile}
          initialParams={route?.params}
        />
        <UserProfileStack.Screen
          name="UserList"
          component={UserListNavigator}
          initialParams={route?.params}
        />
      </UserProfileStack.Group>
    </UserProfileStack.Navigator>
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
          <Stack.Screen name="UserList" component={UserListNavigator} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
