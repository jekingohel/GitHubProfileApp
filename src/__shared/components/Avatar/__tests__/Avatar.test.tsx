import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Avatar from '..';

test('renders Avatar with a single letter correctly', () => {
  const {getByText, toJSON} = render(
    <Avatar source={null} title="John Doe" size="medium" />,
  );
  const avatarText = getByText('JD'); // Assumes "John Doe" renders as "JD"
  expect(avatarText).toBeTruthy();
  expect(toJSON()).toMatchSnapshot();
});

test('renders Avatar with an image correctly', () => {
  const {getByTestId, toJSON} = render(
    <Avatar
      title="Test Case"
      source="https://dummyimage.com/100"
      size="large"
    />,
  );
  const avatarImage = getByTestId('avatar-image');
  expect(avatarImage).toBeTruthy();
  expect(toJSON()).toMatchSnapshot();
});

test('handles onPress event correctly', () => {
  const onPressMock = jest.fn();
  const {getByTestId} = render(
    <Avatar
      source="https://dummyimage.com/100"
      title="Jane Doe"
      size="small"
      onPress={onPressMock}
    />,
  );
  const avatarPressable = getByTestId('avatar-pressable');
  fireEvent.press(avatarPressable);
  expect(onPressMock).toHaveBeenCalled();
});

test('renders Avatar with custom size and color correctly', () => {
  const {toJSON} = render(
    <Avatar
      source="https://dummyimage.com/100"
      title="Alice"
      size="medium"
      customSize={10}
      backgroundColor="#ff0000"
      textColor="#ffffff"
    />,
  );
  expect(toJSON()).toMatchSnapshot();
});
