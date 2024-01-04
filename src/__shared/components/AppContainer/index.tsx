import React, {ReactNode} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

interface AppContainerProps {
  scrollBar?: boolean;
  scroll?: boolean;
  statusBarColor?: string | null;
  loader?: boolean;
  loaderSize?: number;
  children: ReactNode;
}

const AppContainer: React.FC<AppContainerProps> = props => {
  const {scrollBar, scroll = true} = props;
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1, backgroundColor: '#FFFFFF'}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={keyboardVerticalOffset}
        {...props}>
        <StatusBar
          animated={false}
          backgroundColor={'#FFFFFF'}
          hidden={false}
        />

        {scroll ? (
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={scrollBar ?? false}
            contentContainerStyle={{flex: 1}}
            {...props}>
            {props.children}
          </ScrollView>
        ) : (
          props.children
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AppContainer;
