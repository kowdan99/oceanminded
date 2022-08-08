import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, ImageBackground} from 'react-native';

export default function AboutScreen() {
  const bgpic = require('../images/kid.png')
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={bgpic} resizeMode="cover" style={styles.image}>
        <Text style={styles.textheader}> What is Ocean Minded? </Text>
        <Text style={styles.text}> I Am Ocean Minded is a non-profit organization, first of its kind, that's aiming to elevate one mindset at a time creating an ocean-minded community in order to make our oceans as rich, healthy, and abundant as they can be. 
            In order to address the dire need of saving the ocean, we kicked off by hosting awareness campaigns, beach events, clean-ups, and other communal activities. More was needed to address this challenge which is why we founded a company that will serve as a catalyst for bringing individuals and groups together. When like-minded individuals collaborate together over their thalassophile passions, more awareness is raised.
            Now, the question is: Are you Ocean Minded?</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSdkSEbkWXIzksLXGPFFfKLcGvMo5o9-eDN2urecicFmzTAkwQ/viewform')} style={styles.button}>
            <Text style={styles.buttonText}>Volunteer</Text>
      </TouchableOpacity>
      </ImageBackground>
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
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    marginTop: 30,
    color: "#FFFFFF",
    fontWeight: '700',
    fontSize: 16,
    textAlign: "center",
    fontFamily: "Avenir"
    // marginLeft: 20, 
    // marginRight: 20
  },
  textheader: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 30,
    fontFamily: "Avenir",
    textAlign: "center"
  },
  button: {
    backgroundColor: '#FFFFFF',
    width: '50%',
    padding: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 80
  }, 
  buttonText: {
    color: "#6495ED",
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 15
  }
});
