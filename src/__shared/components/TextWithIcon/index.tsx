import React, {PropsWithChildren} from 'react';
import {Image} from 'react-native';

import {Text, View} from '../';

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

type propsType = PropsWithChildren<{
  iconSource?: null | undefined;
  text?: string | undefined;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  fontWeight?: FontWeight;
  imageSize?: [number, number | undefined];
}>;

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
