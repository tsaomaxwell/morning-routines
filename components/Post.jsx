import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { white } from 'color-name';

export default function Post({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    console.log(result);
  
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style = {styles.container}>
      <ScrollView contentContainerStyle= {styles.scrollContainer}>
      
        {image && <Image source={{ uri: image }} style={ styles.profilePic } />}
        <Pressable style={styles.button} onPress={pickImage}>
          <Text style={styles.text}>Upload an image</Text>
        </Pressable>
        
        <Text style={styles.heading}>Description</Text>
        
        <TextInput 
        style = {styles.textInput}
        editable
        multiline
        numberOfLines={2}
        placeholder={"Write a caption... "}
        />
    
    <Pressable style={styles.submitButton} onPress={() =>
      navigation.navigate('Feed')
    } >
          <Text style={styles.submitText}>Post</Text>
        </Pressable>

    </ScrollView> 
    
    </View>

    );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      paddingVertical: 0,
      paddingHorizontal:0
  },
  profilePic: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  }, 
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    borderRadius: 50,
    backgroundColor: "#FF4A4A",
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    borderRadius: 50,
    backgroundColor: "#FF4A4A",
  },
  text:{
    color: 'white',
    fontWeight: "bold",
  },
  submitText:{
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  heading:{
    color: 'black',
    paddingVertical: 12,
    fontSize: 30
  },
  textInput:{
    width:350,
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginHorizontal:20,
    borderColor: 'gray',
      borderWidth: 1,
  }

});



