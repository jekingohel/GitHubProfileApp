import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Skeleton from '../../../__shared/components/Skeleton';

function screens(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        style={{paddingHorizontal: 15, paddingTop: 20}}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Skeleton type="circle" width={70} height={70} />
          <View style={styles.userDetails}>
            <Skeleton width={'60%'} height={24} />
            <Skeleton width={'40%'} height={20} />
          </View>
        </View>
        <Skeleton width={'100%'} height={14} style={{marginTop: 15}} />
        <Skeleton width={'90%'} height={14} style={{marginTop: 5}} />
        <View style={[styles.iconText, {marginTop: 20}]}>
          <Skeleton type="circle" width={16} height={16} />
          <Skeleton width={'50%'} height={14} />
        </View>
        <View style={styles.iconText}>
          <Skeleton type="circle" width={16} height={16} />
          <Skeleton width={'50%'} height={14} />
        </View>
        <View style={styles.iconText}>
          <Skeleton type="circle" width={16} height={16} />
          <Skeleton width={'50%'} height={14} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 15,
    justifyContent: 'flex-start',
  },
  userDetails: {
    flex: 1,
    flexDirection: 'column',
    rowGap: 5,
  },
  iconText: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 5,
    marginTop: 10,
  },
});

export default screens;
