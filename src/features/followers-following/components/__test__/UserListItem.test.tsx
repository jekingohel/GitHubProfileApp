import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import UserItem from '../UserListItem';

const mockData = {
  login: 'testuser',
  avatar_url: 'https://dummyimage.com/100',
};

describe('UserItem component', () => {
  it('renders UserItem correctly', () => {
    const {getByText, getByTestId} = render(
      <UserItem data={mockData} navigation={{navigate: jest.fn()}} />,
    );

    // Check if the username and avatar are rendered
    const usernameText = getByText(mockData.login);
    const avatarImage = getByTestId('avatar-image');

    expect(usernameText).toBeTruthy();
    expect(avatarImage).toBeTruthy();
  });

  it('calls navigation.navigate on press', () => {
    const mockNavigation = {navigate: jest.fn()};
    const {getByTestId} = render(
      <UserItem data={mockData} navigation={mockNavigation} />,
    );

    // Simulate press on TouchableOpacity
    fireEvent.press(getByTestId('user-item-touchable'));

    // Check if navigation.navigate was called with the correct parameters
    expect(mockNavigation.navigate).toHaveBeenCalledWith('UserProfileScreen', {
      login: mockData.login,
    });
  });
});
