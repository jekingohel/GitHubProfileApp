// View.test.tsx
import React from 'react';
import {render} from '@testing-library/react-native';
import View from '..';

test('renders View with default styles', () => {
  const {getByTestId} = render(<View testID="test-view">Test Content</View>);

  // Assert that the view is rendered with default styles
  const testView = getByTestId('test-view');
  expect(testView).toBeTruthy();
  expect(testView.props.style.backgroundColor).toBe('transparent');
  expect(testView.props.style.alignItems).toBe('stretch');
  expect(testView.props.style.justifyContent).toBe('flex-start');
  expect(testView.props.style.flexDirection).toBe('column');
});

test('renders View with custom styles', () => {
  const {getByTestId} = render(
    <View testID="test-view" style={{backgroundColor: 'red'}}>
      Test Content
    </View>,
  );

  // Assert that the view is rendered with custom styles
  const testView = getByTestId('test-view');
  expect(testView).toBeTruthy();
  expect(testView.props.style.backgroundColor).toBe('red');
});

test('renders View with transparent background', () => {
  const {getByTestId} = render(
    <View testID="test-view" transparent>
      Test Content
    </View>,
  );

  // Assert that the view is rendered with transparent background
  const testView = getByTestId('test-view');
  expect(testView).toBeTruthy();
  expect(testView.props.style.backgroundColor).toBe('transparent');
});
