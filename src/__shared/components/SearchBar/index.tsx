import {PropsWithChildren} from 'react';
import {TextInput} from 'react-native';
import {Text, View} from '..';
import { TouchableOpacity } from 'react-native';

type SearchPropsType = PropsWithChildren<{
  handleOnChange?: (arg: any) => any;
  inputRef?: any;
  onSubmit?: any
}>;

function SearchBar({
  handleOnChange,
  inputRef,
  onSubmit
}: SearchPropsType): React.JSX.Element {
  return (
    <View
      transparent
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      style={{
        padding: 10,
        columnGap: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#F4F4F4',
      }}>
      <TextInput
        ref={inputRef}
        editable
        autoCapitalize="none"
        clearButtonMode="always"
        style={{
          backgroundColor: '#f4f4f4',
          fontSize: 15,
          borderWidth: 0,
          flexShrink: 1,
          flexGrow: 1,
          padding: 10,
          borderRadius: 10,
        }}
        onChangeText={handleOnChange}
        placeholder="Search User"
        testID="search-input"
      />
      <TouchableOpacity activeOpacity={0.5} onPress={onSubmit} testID="submit-button">
        <Text fontSize={18} lineHeight={30} color="#3399ff">
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default SearchBar;
