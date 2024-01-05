// TextWithIcon.test.tsx
import React from 'react';
import {render} from '@testing-library/react-native';
import TextWithIcon from '..';

test('renders TextWithIcon with text only', () => {
  const {getByText, queryByTestId} = render(<TextWithIcon text="Test Text" />);

  expect(getByText('Test Text')).toBeTruthy();

  expect(queryByTestId('icon')).toBeNull();
});

test('renders TextWithIcon with text and icon', () => {
  const iconSource = require('../../../../images/icon-company.png');
  const {getByText, getByTestId} = render(
    <TextWithIcon text="Test Text" iconSource={iconSource} />,
  );

  // Assert that the text is rendered
  expect(getByText('Test Text')).toBeTruthy();

  // Assert that the icon is rendered
  const iconImage = getByTestId('icon');
  expect(iconImage).toBeTruthy();
  expect(iconImage.props.source).toEqual(iconSource);
});

test('renders TextWithIcon with custom styles', () => {
  const iconSource = require('../../../../images/icon-company.png');
  const {getByText, getByTestId} = render(
    <TextWithIcon
      text="Styled Text"
      iconSource={iconSource}
      fontSize={18}
      lineHeight={24}
      color="#FF0000"
      fontWeight="bold"
      imageSize={[20, 20]}
    />,
  );

  // text is rendered with custom styles
  const styledText = getByText('Styled Text');
  expect(styledText).toBeTruthy();
  expect(styledText.props.style.fontSize).toBe(18);
  expect(styledText.props.style.lineHeight).toBe(24);
  expect(styledText.props.style.color).toBe('#FF0000');
  expect(styledText.props.style.fontWeight).toBe('bold');

  // icon is rendered with custom imageSize
  const iconImage = getByTestId('icon');
  expect(iconImage).toBeTruthy();
  expect(iconImage.props.style.width).toBe(20);
  expect(iconImage.props.style.height).toBe(20);
});
