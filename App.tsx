import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/About';
import ContactUsScreen from './screens/ContactUs';

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 175, 
    height: 175
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: '50%',
    padding: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 170
  },  
  buttonText: {
    color: "#6495ED",
    fontWeight: '700',
    fontSize: 16
  }
});
