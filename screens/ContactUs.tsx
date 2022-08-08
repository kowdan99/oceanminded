import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Button, Touchable, ImageBackground} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import React from 'react';

type FormData = {
    firstName: string;
    email: string;
    subject: string, 
    message: string
};

export default function ContactUsScreen() {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
          firstName: '',
          email: '',
          subject: '',
          message:''
        }
    });
    const onSubmit = (data: any) => console.log(data);
    const bgpic = require('../images/dog.png')

  return (
    <View style={styles.container}>
      
      <StatusBar style="auto" />
      <ImageBackground source={bgpic} resizeMode="cover" style={styles.image}>
        <Text style={styles.textheader}> Get In Touch! </Text>
        <View>
        <Text style={styles.text}>First name</Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}
        
      <Text style={styles.text}>Email</Text>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
         required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />

    <Text style={styles.text}>Subject</Text>
    <Controller
        control={control}
        rules={{
         maxLength: 100,
         required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="subject"
      />

    <Text style={styles.text}>Message</Text>
    <Controller
        control={control}
        rules={{
         maxLength: 100,
         required: true
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="message"
      />
      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
      <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.button}>
            <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#6495ED',
    // alignItems: 'center',
    //justifyContent: 'center',
  }, 
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 135,
    paddingVertical: 10,
    borderRadius:10,
    marginTop:5,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  textheader: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 2,
    fontFamily: "Avenir",
    textAlign: "center"
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
  button: {
    backgroundColor: '#FFFFFF',
    width: '50%',
    padding: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 83
  }, 
  buttonText: {
    color: "#6495ED",
    fontWeight: '700',
    fontSize: 16, 
    fontFamily: "Avenir",
    marginLeft: 24
  }
});