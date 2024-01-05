import React, {PropsWithChildren} from 'react';
import {Image} from 'react-native';

import {Text, View} from '../';

// Define types for FontWeight
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

// Define properties for the TextWithIcon component
type propsType = PropsWithChildren<{
  iconSource?: null | undefined;
  text?: string | undefined;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  fontWeight?: FontWeight;
  imageSize?: [number, number | undefined];
}>;

/**
 * JSX Component for rendering text with an optional icon.
 * @param {object} props - Properties for configuring the TextWithIcon component.
 * @param {null | undefined} [props.iconSource=null] - Source for the optional icon image.
 * @param {string | undefined} [props.text] - Text content to be displayed.
 * @param {number} [props.fontSize] - Font size for the text.
 * @param {number} [props.lineHeight] - Line height for the text.
 * @param {string} [props.color] - Text color.
 * @param {FontWeight} [props.fontWeight] - Font weight for the text.
 * @param {[number, number | undefined]} [props.imageSize=[16, 16]] - Size of the optional icon image.
 * @returns {JSX.Element} - TextWithIcon component.
 * @example
 * <TextWithIcon
 *   iconSource={require('./icon.png')}
 *   text="Hello, World!"
 *   fontSize={16}
 *   color="#333333"
 *   fontWeight="bold"
 *   imageSize={[20, 20]}
 * />
 */
function TextWithIcon({
  iconSource = null,
  text,
  fontSize,
  lineHeight,
  color,
  fontWeight,
  imageSize = [16, 16],
}: propsType): React.JSX.Element {
  const imageWidth = imageSize[0];
  const imageHeight = imageSize[1] ? imageSize[1] : imageSize[0];

  // Render the TextWithIcon component with an optional icon
  return (
    <View
      transparent
      flexDirection="row"
      alignItems="center"
      style={{columnGap: 10}}>
      {iconSource && (
        <Image
          testID="icon"
          source={iconSource}
          style={{width: imageWidth, height: imageHeight}}
          resizeMode="contain"
        />
      )}
      <Text
        fontSize={fontSize}
        lineHeight={lineHeight}
        color={color}
        fontWeight={fontWeight}>
        {text}
      </Text>
    </View>
  );
}

export default TextWithIcon;
