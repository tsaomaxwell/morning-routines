import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Feed from './components/Feed';
import MakeRoutine from './components/MakeRoutine';
import Post from './components/Post';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="fitness" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Post" component={Post} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen name="Feed" component={Feed} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="globe" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Make Routine"
          component={MakeRoutine}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
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
