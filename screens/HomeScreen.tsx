import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const logo = require('../images/logo.png')
  const bgpic = require('../images/hat.png')

  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate('About');
  }

  return (
    <View style={styles.container}>
      {/* <Image source={logo} style={styles.logo}/> */}
      <ImageBackground source={bgpic} resizeMode="cover" style={styles.image}>
        <TouchableOpacity onPress={navigate} style={styles.button}>
              <Text style={styles.buttonText}>Welcome</Text>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#6495ED',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    width: 175, 
    height: 175
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: '50%',
    padding: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 500,
    marginLeft: 85
  },  
  buttonText: {
    color: "#6495ED",
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 20
  },
  text: {
    color: "white",
    fontSize: 25,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "auto",
    marginTop: 500,
    marginLeft: 50
    // backgroundColor: "#000000c0"
  }
});
