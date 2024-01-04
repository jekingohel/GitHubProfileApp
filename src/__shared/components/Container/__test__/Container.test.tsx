import React from 'react';
import {render} from '@testing-library/react-native';
import Container from '..';
import Text from '../../Text';

test('renders Container with default styles', () => {
  const {toJSON} = render(
    <Container>
      <Text>Test Content</Text>
    </Container>,
  );
  expect(toJSON()).toMatchSnapshot();
});

test('renders Container with custom styles', () => {
  const customStyles = {
    backgroundColor: '#EFEFEF',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
  };

  const {toJSON} = render(
    <Container style={customStyles}>
      <Text>Test Content</Text>
    </Container>,
  );
  expect(toJSON()).toMatchSnapshot();
});

test('renders Container with children', () => {
  const {getByText, toJSON} = render(
    <Container>
      <Text>Test Content</Text>
    </Container>,
  );

  const childText = getByText('Test Content');
  expect(childText).toBeTruthy();
  expect(toJSON()).toMatchSnapshot();
});
