import React from 'react';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react-native';
import SearchBar from '..';

test('renders search bar components', () => {
  // Render the SearchBar component

  const {getByPlaceholderText, getByTestId, toJSON} = render(
    <SearchBar  />,
  );

  // Assert the presence of the search input
  const searchInput = getByPlaceholderText('Search User');
  expect(searchInput).toBeTruthy();

  // Assert the presence of the submit button
  const submitButton = getByTestId('submit-button');
  expect(submitButton).toBeTruthy();
  expect(toJSON()).toMatchSnapshot();
});


