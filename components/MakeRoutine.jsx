import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function MakeRoutine({ navigation }) {
  return (
    <View style = {styles.container}>
        <Text>MakeRoutine</Text>
        <Button
            title="Home"
            onPress={() =>
                navigation.navigate('Home')
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
