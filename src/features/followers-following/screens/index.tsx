import React, {PropsWithChildren, useState} from 'react';
import {FlatList} from 'react-native';

import ScreensSkeleton from '../components/UserListItem.skeleton';
import useItem from '../utils/useItem';
import {AppContainer} from '../../../__shared/components';
import UserItem from '../components/UserListItem';

type propsType = PropsWithChildren<{
  navigation?: any;
  params?: any;
}>;

function screens({params, navigation}: propsType): React.JSX.Element {
  const {data, loading, refreshing, onRefresh} = useItem(params);

  return (
    <AppContainer scroll={false}>
      {loading ? (
        <ScreensSkeleton />
      ) : (
        <FlatList
          data={data}
          onRefresh={onRefresh}
          refreshing={refreshing}
          renderItem={({item}) => (
            <UserItem data={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </AppContainer>
  );
}

export default screens;
