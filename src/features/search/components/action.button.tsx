import React, {PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../../../__shared/components';

type propsType = PropsWithChildren<{
  subTitle?: string;
  onPress?: (arg: any) => any;
  title?: string;
  style?: any;
}>;

function ActionBtn({
  subTitle,
  onPress,
  title,
  style,
}: propsType): React.JSX.Element {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={[
        {flexDirection: 'row', alignItems: 'center', columnGap: 5, ...style},
      ]}>
      <Text
        fontSize={15}
        lineHeight={21}
        color="rgb(31,35,40)"
        fontWeight="600">
        {title}
      </Text>
      <Text fontSize={15} lineHeight={21} color="rgb(31,35,40)">
        {subTitle}
      </Text>
    </TouchableOpacity>
  );
}

export default ActionBtn;
