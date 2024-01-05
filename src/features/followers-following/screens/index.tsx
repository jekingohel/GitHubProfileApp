import React, {PropsWithChildren, useState} from 'react';
import {FlatList} from 'react-native';

import ScreensSkeleton from '../components/UserListItem.skeleton';
import useItem from '../utils/useItem';
import {AppContainer} from '../../../__shared/components';
import UserItem from '../components/UserListItem';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/reducers';

type propsType = PropsWithChildren<{
  navigation?: any;
  params?: any;
}>;

function screens({params, navigation}: propsType): React.JSX.Element {
  const {loading, refreshing, onRefresh} = useItem(params);
  const {collection} = useSelector((state: RootState) => state.Users);
  let list = [];
  if (params?.type === 'followers') {
    list = collection[params?.login]?.followers_list;
  } else {
    list = collection[params?.login]?.following_list;
  }

  return (
    <AppContainer scroll={false}>
      {loading ? (
        <ScreensSkeleton />
      ) : (
        <FlatList
          data={list}
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
