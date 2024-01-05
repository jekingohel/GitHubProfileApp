import React from 'react';
import AppContainer from '..';
import Text from '../../Text';
import View from '../../View';
import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer
    .create(
      <AppContainer>
        <Text>Test Content</Text>
      </AppContainer>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly with scrollable content', () => {
  const tree = renderer
    .create(
      <AppContainer scroll>
        <View style={{height: 900}}>
          <Text>Test Content</Text>
          <Text>Additional Content</Text>
          <Text>More Content</Text>
        </View>
      </AppContainer>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly with a specified status bar color', () => {
  const tree = renderer
    .create(
      <AppContainer statusBarColor="#ff0000">
        <Text>Test Content</Text>
      </AppContainer>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly with a loader', () => {
  const tree = renderer
    .create(
      <AppContainer loader>
        <Text>Test Content</Text>
      </AppContainer>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
