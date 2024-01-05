import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UserDetails from '..';

import {UserDetails as UserDetailTypes} from '../../../../../store/types/UserDetails.types';

const mockData: UserDetailTypes = {
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

describe('UserDetails component', () => {
  it('renders UserDetails correctly with data', () => {
    const {getByText, getByTestId} = render(
      <UserDetails data={mockData} navigation={{navigate: jest.fn()}} />,
    );

    // Check if user details are rendered correctly
    expect(getByText('John Doe')).toBeTruthy();
    expect(getByText('johndoe')).toBeTruthy();
    expect(getByText('Software Developer')).toBeTruthy();
    expect(getByText('johndoe@example.com')).toBeTruthy();
    expect(getByText('City, Country')).toBeTruthy();
    expect(getByText('ABC Corp')).toBeTruthy();
    expect(getByText('1.0K')).toBeTruthy();
    expect(getByText('500')).toBeTruthy();

    // Check if the image is rendered
    const avatarImage = getByTestId('avatar-image');
    expect(avatarImage.props.source.uri).toBe('https://dummyimage.com/100');
  });

  it('navigates to UserList when followers button is pressed', () => {
    const navigationMock = {navigate: jest.fn()};
    const {getByText} = render(
      <UserDetails data={mockData} navigation={navigationMock} />,
    );

    // Simulate press on followers button
    fireEvent.press(getByText('1.0K'));

    // Check if navigation function is called with the correct parameters
    expect(navigationMock.navigate).toHaveBeenCalledWith('UserList', {
      type: 'followers',
      login: 'johndoe',
    });
  });

  it('navigates to UserList when following button is pressed', () => {
    const navigationMock = {navigate: jest.fn()};
    const {getByText} = render(
      <UserDetails data={mockData} navigation={navigationMock} />,
    );

    // Simulate press on following button
    fireEvent.press(getByText('500'));

    // Check if navigation function is called with the correct parameters
    expect(navigationMock.navigate).toHaveBeenCalledWith('UserList', {
      type: 'following',
      login: 'johndoe',
    });
  });
});
