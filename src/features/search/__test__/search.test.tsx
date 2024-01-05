import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import Screens from '../screens';

const mockData = {
  avatar_url: 'https://dummyimage.com/100',
  name: 'John Doe',
  login: 'johndoe',
  bio: 'Software Developer',
  email: 'johndoe@example.com',
  location: 'City, Country',
  company: 'ABC Corp',
  followers: 1000,
  following: 500,
};

jest.mock('../../../requests', () => ({
  GetUser: jest.fn().mockResolvedValue(mockData),
}));

test('renders search screen', () => {
  // Render the SearchBar component
  const navigationMock = {navigate: jest.fn()};
  const {toJSON} = render(<Screens navigation={navigationMock} />);

  // Assert the presence of the search input
  expect(toJSON()).toMatchSnapshot();
});

