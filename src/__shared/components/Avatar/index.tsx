import React from 'react';
import {Image, Pressable} from 'react-native';
import Text from '../Text';

interface AvatarProps {
  source: string | null;
  title: string;
  rounded?: boolean;
  size: 'large' | 'medium' | 'small';
  onPress?: () => void;
  backgroundColor?: string;
  textColor?: string;
  customColor?: string | null;
  customSize?: number;
  loading?: boolean;
  containerStyle?: object;
  singleLetter?: boolean;
  fullView?: boolean;
  imageProps?: object;
}

const sizeArray = {
  small: 28,
  medium: 38,
  large: 70,
};

const Avatar: React.FC<AvatarProps> = props => {
  const {
    containerStyle,
    singleLetter,
    fullView,
    imageProps = {},
    source = null,
    title = '',
    rounded = false,
    size = 'medium',
    onPress = () => {},
    backgroundColor = 'rgba(142,142,147,.8)',
    textColor = '#FFFFFF',
  } = props;
  const initialis = title
    ?.match(/\b(\w)/g)
    ?.slice(0, 2)
    ?.join('')
    ?.toUpperCase();

  return source === null ? (
    <Pressable
      onPress={onPress}
      disabled={!onPress}
      style={[
        {
          width: sizeArray[size],
          height: sizeArray[size],
          backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: rounded ? sizeArray[size] : 0,
        },
        containerStyle && containerStyle,
      ]}
      {...props}>
      <Text
        color={textColor}
        fontWeight="400"
        style={{alignSelf: 'center'}}
        fontSize={sizeArray[size] / 2.2}
        lineHeight={sizeArray[size] + sizeArray[size] / 10}>
        {singleLetter ? title?.charAt(0)?.toUpperCase() : initialis}
      </Text>
    </Pressable>
  ) : (
    <Pressable
      {...props}
      disabled={!onPress && !fullView}
      style={[{position: 'relative'}]}>
      <Image
        {...imageProps}
        source={{uri: source}}
        style={[
          {
            borderRadius: rounded ? sizeArray[size] : 0,
            width: sizeArray[size],
            height: sizeArray[size],
          },
          containerStyle && containerStyle,
        ]}
      />
    </Pressable>
  );
};

export default Avatar;
