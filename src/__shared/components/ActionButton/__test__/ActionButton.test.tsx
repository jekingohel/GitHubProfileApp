import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ActionButton from '..';

describe('ActionBtn component', () => {
  it('renders ActionBtn correctly with title and subTitle', () => {
    const {getByText} = render(
      <ActionButton title="Click Me" subTitle="Subtitle" />,
    );

    // Check if both title and subTitle are rendered
    const titleText = getByText('Click Me');
    const subTitleText = getByText('Subtitle');

    expect(titleText).toBeTruthy();
    expect(subTitleText).toBeTruthy();
  });

  it('calls onPress function on press', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <ActionButton
        title="Click Me"
        subTitle="Subtitle"
        onPress={onPressMock}
      />,
    );

    // Simulate press on TouchableOpacity
    fireEvent.press(getByTestId('action-btn-touchable'));

    // Check if onPress function was called
    expect(onPressMock).toHaveBeenCalled();
  });

  it('renders ActionBtn correctly with custom styles', () => {
    const {getByTestId} = render(
      <ActionButton
        title="Click Me"
        subTitle="Subtitle"
        style={{backgroundColor: 'red'}}
      />,
    );

    // Check if the component has the correct custom style
    const actionBtn = getByTestId('action-btn-touchable');
    expect(actionBtn.props.style.backgroundColor).toBe('red');
  });
});
