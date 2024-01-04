import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(routeName: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function push(routeName: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(routeName, params));
  }
}
