import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import DropDownPicker from 'react-native-dropdown-picker'
import { white } from 'color-name';

DropDownPicker.setListMode("SCROLLVIEW");


export default function Post({ navigation }) {
  const [image, setImage] = useState(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Meditation', value: 'Meditation'},
    {label: 'Reading', value: 'Reading'},
    {label: 'Coding', value: 'Coding'}
  ]);

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
      <ScrollView contentContainerStyle= {styles.scrollContainer} nestedScrollEnabled={true}>
      
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
    

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          // defaultIndex={0}
          containerStyle={styles.dropdown}
          listMode="MODAL"
          scrollViewProps={{
            nestedScrollEnabled: true,
    }}
          // onChangeItem={item => console.log(item.label, item.value)}
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
    width: 200,
    height: 200,
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
    backgroundColor: 'black',
  },
  submitButton: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 20,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black', 
  },
  text:{
    color: 'white'
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
  },
  dropdown:{
    width:350,
    // position:"relative",
    paddingVertical: 20,
    marginBottom: 18,
    // zIndex: 1000,
    // elevation: 10,
  }

});



