// Text.test.tsx
import React from 'react';
import {render} from '@testing-library/react-native';
import Text from '..';

test('renders Text with default props', () => {
  const {getByText} = render(<Text>Test Text</Text>);

  // Assert that the text is rendered with default props
  expect(getByText('Test Text')).toBeTruthy();
});

test('renders Text with custom fontSize and fontWeight', () => {
  const {getByText} = render(
    <Text fontSize={16} fontWeight="bold">
      Custom Text
    </Text>,
  );

  // Assert that the text is rendered with custom fontSize and fontWeight
  const customText = getByText('Custom Text');
  expect(customText).toBeTruthy();
  expect(customText.props.style.fontSize).toBe(16);
  expect(customText.props.style.fontWeight).toBe('bold');
});

test('renders Text with custom align and color', () => {
  const {getByText} = render(
    <Text align="center" color="#FF0000">
      Styled Text
    </Text>,
  );

  // Assert that the text is rendered with custom align and color
  const styledText = getByText('Styled Text');
  expect(styledText).toBeTruthy();
  expect(styledText.props.style.textAlign).toBe('center');
  expect(styledText.props.style.color).toBe('#FF0000');
});

test('renders Text with custom lineHeight and italic', () => {
  const {getByText} = render(
    <Text lineHeight={24} italic>
      Formatted Text
    </Text>,
  );

  // Assert that the text is rendered with custom lineHeight and italic
  const formattedText = getByText('Formatted Text');
  expect(formattedText).toBeTruthy();
  expect(formattedText.props.style.lineHeight).toBe(24);
  expect(formattedText.props.style.fontStyle).toBe('italic');
});
