import React from 'react';
import {StyleSheet} from 'react-native';

import {
  ScrollableContainer,
  Skeleton,
  View,
} from '../../../__shared/components';

function ScreensSkeleton(): React.JSX.Element {
  return (
    <ScrollableContainer
      showsVerticalScrollIndicator={false}
      contentInsetAdjustmentBehavior="automatic">
      {Array(10)
        .fill(0)
        .map((_, index) => {
          return (
            <View transparent key={index}>
              <View style={styles.container}>
                <Skeleton type="circle" width={38} height={38} />
                <View style={styles.userDetails}>
                  <Skeleton width={'90%'} height={20} />
                </View>
              </View>
              <Skeleton width={'100%'} height={1} style={{marginTop: 10}} />
            </View>
          );
        })}
    </ScrollableContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 15,
    justifyContent: 'flex-start',
  },
  userDetails: {
    flex: 1,
  },
});

export default ScreensSkeleton;
