import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {enableScreens} from 'react-native-screens';
import StackRoutes from './src/routes/StackRoutes';
import 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import StoreProvider from './src/helpers/store/StoreProvider';
enableScreens();

function App() {
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
      }}>
      <StoreProvider>
        <GestureHandlerRootView>
          <StackRoutes />
        </GestureHandlerRootView>
      </StoreProvider>
    </SafeAreaView>
  );
}

export default App;
