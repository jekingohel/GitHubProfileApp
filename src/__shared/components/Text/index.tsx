import React from 'react';
import {Text as RNText, TextStyle} from 'react-native';

// Define types for FontWeight and TextAlign
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

// Define properties for the Text component
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

/**
 * JSX Component for rendering text with customizable styles.
 * @param {object} props - Properties for configuring the Text component.
 * @param {React.ReactNode} props.children - Content to be displayed as text.
 * @param {number} [props.fontSize=12] - Font size for the text.
 * @param {FontWeight} [props.fontWeight='400'] - Font weight for the text.
 * @param {TextAlign} [props.align='left'] - Text alignment.
 * @param {string} [props.color='#000000'] - Text color.
 * @param {number | undefined} [props.lineHeight=18] - Line height for the text.
 * @param {boolean} [props.italic=false] - Italic style for the text.
 * @param {object | undefined} [props.style] - Additional styles for the text.
 * @returns {JSX.Element} - Text component.
 * @example
 * <Text fontSize={16} fontWeight="bold" color="#333333">Hello, World!</Text>
 */
const Text: React.FC<CustomViewProps> = props => {
  // Destructure properties from props or use default values
  const {
    fontSize = 12,
    fontWeight = '400',
    align = 'left',
    color = '#000000',
    lineHeight = 18,
    italic = false,
  } = props;

  // Define the style for the text container
  const containerStyle: TextStyle = {
    fontSize,
    fontWeight,
    textAlign: align,
    color,
    lineHeight,
    fontStyle: italic ? 'italic' : 'normal',
    ...props.style,
  };

  // Render the text component with the specified styles
  return <RNText style={containerStyle}>{props.children}</RNText>;
};

export default Text;
