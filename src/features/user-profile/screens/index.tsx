import React, {PropsWithChildren} from 'react';
import {AppContainer} from '../../../__shared/components';
import UserDetailsSkeleton from '../../__shared/components/UserDetails/skeleton';
import UserDetails from '../../__shared/components/UserDetails';
import useItem from '../utils/useItem';
import {useSelector} from 'react-redux';

type SectionProps = PropsWithChildren<{
  navigation: any;
  params?: any;
}>;

function screens({navigation, params}: SectionProps): React.JSX.Element {
  const {loading, refreshing, onRefresh} = useItem(params);
  const {collection} = useSelector((state: any) => state.Users);

  return (
    <AppContainer scroll={false}>
      {loading ? (
        <UserDetailsSkeleton />
      ) : (
        <UserDetails
          data={collection[params?.login]}
          navigation={navigation}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    </AppContainer>
  );
}

export default screens;
