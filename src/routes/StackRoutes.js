import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import QuestionScreen from '../screens/QuestionScreen';
import MyTicket from '../screens/MyTicket';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
          header
        />
        <Stack.Screen name="MyTicket" component={MyTicket} />

        {/* <Stack.Screen name="QuestionPage" component={QuestionScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackRoutes;
