import React, {PropsWithChildren, useState} from 'react';
import {FlatList} from 'react-native';

import ScreensSkeleton from '../components/UserListItem.skeleton';
import useItem from '../utils/useItem';
import {AppContainer} from '../../../__shared/components';
import UserItem from '../components/UserListItem';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/reducers';

/**
 * Props for the screens component.
 */
type propsType = PropsWithChildren<{
  navigation?: any;
  params?: any;
}>;

/**
 * Screens component to display a list of followers or following users.
 * @param {propsType} param0 - Props for the screens component.
 * @returns {React.JSX.Element} - JSX element representing the screens component.
 */
function screens({params, navigation}: propsType): React.JSX.Element {
  const {loading, refreshing, onRefresh} = useItem(params);
  const {collection} = useSelector((state: RootState) => state.Users);

  // Determine the list to be displayed based on the type parameter
  let list = [];
  if (params?.type === 'followers') {
    list = collection[params?.login]?.followers_list;
  } else {
    list = collection[params?.login]?.following_list;
  }

  return (
    <AppContainer scroll={false}>
      {loading ? (
        // Display skeleton while data is loading
        <ScreensSkeleton />
      ) : (
        // Render a FlatList with the fetched user data
        <FlatList
          data={list}
          onRefresh={onRefresh}
          refreshing={refreshing}
          renderItem={({item}) => (
            // Render each user item using the UserItem component
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
