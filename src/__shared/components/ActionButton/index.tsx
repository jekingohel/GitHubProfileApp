import React, {PropsWithChildren} from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '..';

type propsType = PropsWithChildren<{
  subTitle?: string;
  onPress?: () => void;
  title?: string;
  style?: object;
}>;

/**
 * Functional component for an action button with a title and optional subtitle.
 * @param {object} props - Component properties.
 * @param {string} props.subTitle - Optional subtitle text.
 * @param {() => void} props.onPress - Callback function for the button press event.
 * @param {string} props.title - Title text for the button.
 * @param {object} props.style - Additional styles for the button.
 * @returns {JSX.Element} - Action button component.
 * @example
 * <ActionBtn
 *   subTitle="followers"
 *   onPress={() => handlePress()}
 *   title="123"
 *   style={{ marginTop: 10 }}
 * />
 */
function ActionBtn({
  subTitle,
  onPress,
  title,
  style,
}: propsType): React.JSX.Element {
  return (
    <TouchableOpacity
      testID="action-btn-touchable"
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
      <Text fontSize={15} lineHeight={21} color="rgb(101,109,118)">
        {subTitle}
      </Text>
    </TouchableOpacity>
  );
}

export default ActionBtn;
