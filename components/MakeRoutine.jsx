import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import { useState } from 'react';

import BouncyCheckbox from "react-native-bouncy-checkbox";
    

  
const routineList = [
    {activity: 'Yoga'},
    {activity: 'Running'},
    {activity: 'Swimming'},
    {activity: 'Stretching'},
    {activity: 'Reading'},
    {activity: 'Healthy Eating'},
    {activity: 'Meditating'},
    {activity: 'Push-ups'},
    {activity: 'Sit-ups'},
    {activity: 'Biking'},
]
  

  
export default function MakeRoutine({ navigation }) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const CreateCheckBox = ({activity}) => {
        return (
            <View style = {styles.checkBoxContainer}>
                <BouncyCheckbox
                style = {styles.indivCheckBox}
                size = {26}
                fillColor = "red"
                unfillColor = "#FFFFFF"
                text = {activity}
                iconStyle = {{ borderColor: "red" }}
                onPress = {(isChecked: boolean) => {}}
                height = {500}
                textStyle={{textDecorationLine: "none", fontSize: 20, color: "#000000"}}
                />
            </View>
        )
    }
    return (
        <View style = {styles.container}>
            
            <View>
                <Text style = {styles.routineTitleContainer}>Make Your Routine</Text>
                {
                routineList.map((box,i) => {
                    return (
                    <CreateCheckBox key={i} activity = {box.activity} />
                    )
                })
                }
                
            </View>
            
            <View>
                <TouchableOpacity style = {styles.nextButtonContainer}
                    onPress={() =>
                        navigation.navigate('Home')
                    }>
                    <Text style = {styles.nextButtonText}>Set Routine</Text>
                </TouchableOpacity>
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  routineTitleContainer: {
    marginTop: 10,
    paddingVertical: 8,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#20232a",
  },
  
  nextButtonContainer: {
    marginBottom: 100,
    backgroundColor: "#FF4A4A",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    color: "#000000",
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  
  nextButtonText:  {
    fontSize: 32,
    fontWeight: "bold",
  },
  
  checkBoxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 30
  },
  
  indivCheckBox: {
    marginTop: 12,
    margin: 7,
    textDecorationLine: "none",
  }
  
});
