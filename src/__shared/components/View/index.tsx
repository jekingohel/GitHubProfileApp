import React from 'react';
import {
  View as RNView,
  ViewStyle,
  ViewProps as RNViewProps,
} from 'react-native';

// Define properties for the CustomView component, extending RNViewProps
interface CustomViewProps extends RNViewProps {
  transparent?: boolean;
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  flexDirection?: ViewStyle['flexDirection'];
  children: React.ReactNode;
  style?: ViewStyle;
}

/**
 * JSX Component for rendering a custom view with optional styling.
 * @param {object} props - Properties for configuring the CustomView component.
 * @param {boolean} [props.transparent=false] - Whether the view should have a transparent background.
 * @param {ViewStyle['alignItems']} [props.alignItems='stretch'] - Alignment for the items inside the view.
 * @param {ViewStyle['justifyContent']} [props.justifyContent='flex-start'] - Justification for the content inside the view.
 * @param {ViewStyle['flexDirection']} [props.flexDirection='column'] - Direction of the flex container.
 * @param {React.ReactNode} props.children - Child components to be rendered inside the view.
 * @param {ViewStyle} [props.style] - Additional style for the view.
 * @returns {JSX.Element} - CustomView component.
 * @example
 * <CustomView
 *   transparent
 *   alignItems="center"
 *   justifyContent="space-between"
 *   flexDirection="row"
 *   style={{margin: 10}}
 * >
 *   <Text>Hello</Text>
 *   <Text>World</Text>
 * </CustomView>
 */
const View: React.FC<CustomViewProps> = props => {
  // Destructure values from the props object
  const {
    children,
    alignItems = 'stretch',
    justifyContent = 'flex-start',
    flexDirection = 'column',
  } = props;

  // Create a style object for the view container
  const containerStyle: ViewStyle = {
    backgroundColor: 'transparent',
    alignItems,
    justifyContent,
    flexDirection,
    ...props.style,
  };

  // Render the CustomView component with optional styling
  return (
    <RNView testID="test-view" style={containerStyle}>
      {children}
    </RNView>
  );
};

export default View;
