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

/**
 * JSX Component for rendering user details.
 * @param {object} props - The properties object.
 * @param {object} props.navigation - The navigation object for routing.
 * @param {object} props.params - The parameters object containing user details.
 * @returns {JSX.Element} - Rendered component.
 */

function screens({navigation, params}: SectionProps): React.JSX.Element {
  // Destructure loading, refreshing, and onRefresh from useItem hook
  const {loading, refreshing, onRefresh} = useItem(params);

  // Get the users collection from the Redux store
  const {collection} = useSelector((state: any) => state.Users);

  return (
    <AppContainer scroll={false}>
      {loading ? (
        // Display skeleton loader while user details are loading
        <UserDetailsSkeleton />
      ) : (
        // Render UserDetails component with user details, navigation, refreshing, and onRefresh
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
