import React, {PropsWithChildren} from 'react';
import {FlatList} from 'react-native';

import ScreensSkeleton from '../components/user_profile.skeleton';
import useItem from '../utils/useItem';
import {AppContainer} from '../../../__shared/components';
import UserItem from '../components/user_list.item';

type propsType = PropsWithChildren<{
  navigation?: any;
  params?: any;
}>;

function screens({params, navigation}: propsType): React.JSX.Element {
  const {data, loading} = useItem(params);
  return (
    <AppContainer scroll={false}>
      {loading ? (
        <ScreensSkeleton />
      ) : (
        <FlatList
          data={data}
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
