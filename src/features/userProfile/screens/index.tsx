import React, {PropsWithChildren, useRef, useState} from 'react';
import {AppContainer} from '../../../__shared/components';
import Skeleton from '../components/user-details.skeleton';
import UserDetails from '../components/user-details';
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
        <Skeleton />
      ) : (
        <UserDetails data={data} navigation={navigation} />
      )}
    </AppContainer>
  );
}

export default screens;
