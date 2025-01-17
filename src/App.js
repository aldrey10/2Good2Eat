import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { HomeScreen } from './screens/HomeScreen';
import { RestaurantScreen } from './screens/RestaurantScreen';
import { NavigationContainer } from '@react-navigation/native';
import { RestaurantForm } from './screens/RestaurantForm';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Restaurants" component={RestaurantScreen} options={({ navigation }) => ({
            headerRight: () => (
              <Button title='Add' onPress={() => navigation.navigate("Nuevo restaurante")}></Button>
            ),
          })} />
        <Drawer.Screen name="Nuevo restaurante" component={RestaurantForm} options={{ drawerItemStyle: { display: 'none' }}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
