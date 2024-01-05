import {
  createNavigationContainerRef,
  CommonActions,
} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

// Create a navigation container reference using the provided function
export const navigationRef = createNavigationContainerRef();

/**
 * Navigate to a specific route.
 *
 * @param {string} routeName - The name of the route to navigate to.
 * @param {object} params - Optional parameters to pass to the route.
 */
export function navigate(routeName: string, params?: object) {
  // Check if the navigation container is ready
  if (navigationRef.isReady()) {
    // Dispatch a navigate action to the specified route with optional parameters
    navigationRef.dispatch(CommonActions.navigate(routeName, params));
  } else {
    // You can decide what to do if react navigation is not ready
    // You can ignore this, or add these actions to a queue you can call later
  }
}

/**
 * Push a new route onto the navigation stack.
 *
 * @param {string} routeName - The name of the route to push onto the stack.
 * @param {object} params - Optional parameters to pass to the route.
 */
export function push(routeName: string, params?: object) {
  // Check if the navigation container is ready
  if (navigationRef.isReady()) {
    // Dispatch a push action to the specified route with optional parameters
    navigationRef.dispatch(StackActions.push(routeName, params));
  }
}
