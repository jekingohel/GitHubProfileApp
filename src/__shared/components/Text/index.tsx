import React from 'react';
import {Text as RNText, TextStyle} from 'react-native';

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

type Align = 'left' | 'auto' | 'right' | 'center' | 'justify' | undefined;

interface CustomViewProps {
  children: React.ReactNode;
  fontSize?: number;
  fontWeight?: FontWeight;
  align?: Align;
  color?: string;
  lineHeight?: number | undefined;
  italic?: boolean;
  style?: object | undefined;
}

const Text: React.FC<CustomViewProps> = props => {
  const {
    fontSize = 12,
    fontWeight = '400',
    align = 'left',
    color = '#000000',
    lineHeight = 18,
    italic = false,
  } = props;

  const containerStyle: TextStyle = {
    fontSize,
    fontWeight,
    textAlign: align,
    color,
    lineHeight,
    fontStyle: italic ? 'italic' : 'normal',
    ...props.style,
  };

  return <RNText style={containerStyle}>{props.children}</RNText>;
};

export default Text;
