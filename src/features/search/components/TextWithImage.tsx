import React, {PropsWithChildren} from 'react';
import {Image} from 'react-native';

import {Text, View} from '../../../__shared/components';

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
  source?: any | undefined;
  text?: any;
  fontSize?: number;
  lineHeight?: number;
  color?: string;
  fontWeight?: FontWeight;
  imageSize?: any;
}>;

function TextWithImage({
  source = null,
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
      {source && (
        <Image
          source={source}
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

export default TextWithImage;
