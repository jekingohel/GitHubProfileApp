import React, {PropsWithChildren, useRef, useState} from 'react';
import {AppContainer} from '../../../__shared/components';
import UserDetailsSkeleton from '../../__shared/components/UserDetails/skeleton';
import UserDetails from '../../__shared/components/UserDetails';
import useItem from '../utils/useItem';

type SectionProps = PropsWithChildren<{
  navigation: any;
  params?: any;
}>;

function screens({navigation, params}: SectionProps): React.JSX.Element {
  const {data, loading} = useItem(params);

  return (
    <AppContainer scroll={false}>
      {loading ? (
        <UserDetailsSkeleton />
      ) : (
        <UserDetails data={data} navigation={navigation} />
      )}
    </AppContainer>
  );
}

export default screens;
