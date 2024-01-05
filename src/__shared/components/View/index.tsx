import React from 'react';
import {
  View as RNView,
  ViewStyle,
  ViewProps as RNViewProps,
} from 'react-native';

interface CustomViewProps extends RNViewProps {
  transparent?: boolean;
  alignItems?: ViewStyle['alignItems'];
  justifyContent?: ViewStyle['justifyContent'];
  flexDirection?: ViewStyle['flexDirection'];
  children: React.ReactNode;
  style?: ViewStyle;
}

const View: React.FC<CustomViewProps> = props => {
  const {
    children,
    alignItems = 'stretch',
    justifyContent = 'flex-start',
    flexDirection = 'column',
    ...restProps
  } = props;

  const containerStyle: ViewStyle = {
    backgroundColor: 'transparent',
    alignItems,
    justifyContent,
    flexDirection,
    ...props.style,
  };

  return (
    <RNView testID="test-view" style={containerStyle}>
      {children}
    </RNView>
  );
};

export default View;
