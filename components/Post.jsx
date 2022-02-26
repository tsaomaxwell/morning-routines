import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, Pressable, TextInput } from 'react-native';

export default function Post({ navigation }) {
  return (
    <View style = {styles.container}>
        <Image
        style={styles.profilePic}
        source={{
          uri: 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
        }}
      />
      <Text style={styles.heading}>Description</Text>
    <TextInput 
    style = {styles.textInput}
    editable
    multiline
    numberOfLines={6}
    placeholder={"Write a caption... "}
    />
        <Pressable style={styles.button} onPress={() => 
        Alert.alert("Upload an image to the app")
        }>
      <Text style={styles.text}>Upload an image</Text>
    </Pressable>
    
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
    backgroundColor: 'black',
  },
  text:{
    color: 'white'
  },
  heading:{
    color: 'black',
    paddingVertical: 12,
    fontSize: 30
  },
  textInput:{
    paddingHorizontal: 34
  }

});
