import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import StatusMessage from '..';

test('renders StatusMessage with title and description', async () => {
  const {getByText} = render(
    <StatusMessage title="Test Title" description="Test Description" />,
  );

  await waitFor(() => {
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('Test Description')).toBeTruthy();
  });
});

test('renders StatusMessage with only description', async () => {
  const {getByText} = render(<StatusMessage description="Test Description" />);
  await waitFor(() => {
    expect(getByText('Test Description')).toBeTruthy();
  });
});
