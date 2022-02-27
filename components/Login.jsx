import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style = {styles.container}>
        <Text>Login</Text>
        <Button
            title="Login2"
            onPress={() =>
                navigation.navigate('Make Routine')
            }
        />
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
});
