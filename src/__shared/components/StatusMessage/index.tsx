import React, {PropsWithChildren} from 'react';

import {Text, View} from '../';

type propsType = PropsWithChildren<{
  title?: string | undefined;
  description: string | undefined;
}>;

function StatusMessage({
  title = undefined,
  description = undefined,
}: propsType): React.JSX.Element {
  return (
    <View
      transparent
      alignItems="center"
      justifyContent="center"
      style={{flex: 1, paddingHorizontal: 30}}>
      {title && (
        <Text
          fontSize={24}
          lineHeight={30}
          fontWeight="600"
          align="center"
          color="rgb(31,35,40)">
          {title}
        </Text>
      )}
      <Text
        fontSize={18}
        lineHeight={24}
        fontWeight="300"
        align="center"
        color="rgb(101,109,118)">
        {description}
      </Text>
    </View>
  );
}

export default StatusMessage;
