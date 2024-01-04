import {
  createNavigationContainerRef,
  NavigationContainerRef,
} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  } else {
    // Handle the case when react navigation is not ready
  }
}

export function push(routeName: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(routeName, params));
  }
}
