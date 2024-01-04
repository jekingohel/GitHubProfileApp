import React from 'react';
import {ViewStyle} from 'react-native';
import View from '../View';

interface CustomViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

const Container: React.FC<CustomViewProps> = props => {
  return (
    <View
      style={{
        backgroundColor: '#FFFFFF',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
      }}>
      {props.children}
    </View>
  );
};

export default Container;
