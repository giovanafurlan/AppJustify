import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Inicio from '../view/inicio';
import FlexStart from '../view/flex-start';
import Center from '../view/center';
import FlexEnd from '../view/flex-end';
import SpaceBetween from '../view/space-between';
import SpaceAround from '../view/space-around';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
 return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen  
          name="Inicio" 
          component={Inicio} 
          options={{headerShown: false}}/>
        <Stack.Screen  
          name="center" 
          component={Center} 
          options={{headerShown: false}}/>
        <Stack.Screen  
          name="flex-start" 
          component={FlexStart} 
          options={{headerShown: false}}/>
        <Stack.Screen  
          name="flex-end" 
          component={FlexEnd} 
          options={{headerShown: false}}/>
        <Stack.Screen  
        name="space-between" 
        component={SpaceBetween} 
        options={{headerShown: false}}/>
        <Stack.Screen  
        name="space-around" 
        component={SpaceAround} 
        options={{headerShown: false}}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}