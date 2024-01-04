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
  large: 65,
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
    customSize = 0,
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
          width: sizeArray[size] + customSize!,
          height: sizeArray[size] + customSize!,
          backgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: rounded ? sizeArray[size] + customSize! : 0,
        },
        containerStyle && containerStyle,
      ]}
      {...props}>
      <Text
        color={textColor}
        fontWeight="400"
        style={{alignSelf: 'center'}}
        fontSize={(sizeArray[size] + customSize!) / 2.2}
        lineHeight={sizeArray[size] + customSize! + sizeArray[size] / 10}>
        {singleLetter ? title?.charAt(0)?.toUpperCase() : initialis}
      </Text>
    </Pressable>
  ) : (
    <Pressable
      testID="avatar-pressable"
      {...props}
      disabled={!onPress && !fullView}
      onPress={() => {
        onPress && onPress();
      }}
      style={[{position: 'relative'}]}>
      <Image
        testID="avatar-image"
        {...imageProps}
        source={{uri: source}}
        style={[
          {
            borderRadius: rounded ? sizeArray[size] + customSize! : 0,
            width: sizeArray[size] + customSize!,
            height: sizeArray[size] + customSize!,
          },
          containerStyle && containerStyle,
        ]}
      />
    </Pressable>
  );
};

export default Avatar;
