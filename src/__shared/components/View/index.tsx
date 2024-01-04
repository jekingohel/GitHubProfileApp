import React from 'react';
import {View as RNView, ViewStyle} from 'react-native';

interface CustomViewProps {
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
  } = props;

  const containerStyle: ViewStyle = {
    backgroundColor: 'transparent',
    alignItems,
    justifyContent,
    flexDirection,
    ...props.style,
  };

  return <RNView style={containerStyle}>{children}</RNView>;
};

export default View;
