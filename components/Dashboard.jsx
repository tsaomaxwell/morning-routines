import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import AsyncStorage from "@react-native-async-storage/async-storage";


let userDataExamples = {
    "_id": "wrvevre",
    "email":"tsaomaxwell@gmail.com",
    "name":"Maxwell",
    "routine": [
        {
            "activity":"yoga",
            "datesDone":[]
        },
        {
            "activity":"healthy bkfast",
            "datesDone":[]
        },
        {
          "activity":"running",
          "datesDone":[]
        },
        {
          "activity":"reading",
          "datesDone":[]
      }
    ]
}

let userDataExamples2 = {
  "_id": "wrvevre",
  "email":"tsaomaxwell@gmail.com",
  "name":"Maxwell",
  "routine": [
      {
          "activity":"yoga",
          "datesDone":[new Date()]
      },
      {
          "activity":"healthy bkfast",
          "datesDone":[]
      },
      {
        "activity":"running",
        "datesDone":[]
      },
      {
        "activity":"reading",
        "datesDone":[]
    }
  ]
}

export default function Dashboard({ navigation }) {
  const [userDataExample, setUserDataExample] = useState(userDataExamples);
  const [update, setUpdate] = useState(1);

  useEffect(()=>{
    AsyncStorage.getItem("data").then((data) => {
      console.log(data);
      setUpdate(2);
      if(data=="hi")
      setUserDataExample(userDataExamples2);
    }).catch((err) => {});
  },[])

  const history = () => {
    const getDaysDone = (dates) => {
      let today = new Date();
      let sortedDates = dates.sort().reverse();
      let count = 0;
        for(var i = 0; i < sortedDates.length; i++){
          if(sortedDates[i].getDate() == today.getDate() &&
          sortedDates[i].getMonth() == today.getMonth() &&
          sortedDates[i].getFullYear() == today.getFullYear()){
            count = count + 1;
            today.setDate(today.getDate() - 1);
          }
        }
      return count;
    }
    
    return userDataExample.routine.map((activity) => {
      return (
        <Text>{activity.activity}: {getDaysDone(activity.datesDone)} day streak</Text>
      )
    });
  }
  
  const list = (navigation) => {
    return userDataExample.routine.map((activity) => {
      const findColor = () => {
        const today = new Date();
        for(let someDate of activity.datesDone) {
          if(someDate.getDate() == today.getDate() &&
          someDate.getMonth() == today.getMonth() &&
          someDate.getFullYear() == today.getFullYear())
            return "green";
        }
        let col = "white"
        if(activity.activty=="yoga"){
          AsyncStorage.getItem('data').then((d)=> {
            if(d=="hi"){
              col = "green";
            }
          })
        }
        return col;
      }
      const goPost = () => {
        const dataCopy = userDataExample;
        dataCopy.routine[0].datesDone = [new Date()];
        setUserDataExample(dataCopy);
        console.log(userDataExample);
        setUpdate(2);
        AsyncStorage.setItem('data',"hi").then(() => navigation.navigate('Post'));
      }
      let color = findColor(activity.activity);
      return (
        <TouchableOpacity key={activity.activity} style = {styles.todo} onPress={goPost}>
          <View key={update} style={[styles.circle,{backgroundColor: color}]}/>
          <Text style={styles.todoText}>{activity.activity}</Text>
        </TouchableOpacity>
      );
    });
  };


  const makeCalDates = () => {
    let calendarMarking = {};
    const dates = userDataExample.routine[0].datesDone;
      for(let someDate of dates) {
        const done = true;
        for(let activity of userDataExample.routine){
          if(!activity.datesDone.some((date) => {
            return someDate.getDate() == date.getDate() &&
            someDate.getMonth() == date.getMonth() &&
            someDate.getFullYear() == date.getFullYear();
          })){
            done = false;
          }
        }
        if(done) {
          calendarMarking[someDate.getFullYear()
             + "-" + ('0'+(someDate.getMonth()+1)).slice(-2)
             + "-" + ('0'+someDate.getDate()).slice(-2)] = 
              {startingDay: true, endingDay: true, color: 'green', textColor: 'yellow'};
        }
      }
    return calendarMarking;
  }
  const markers = makeCalDates();


  return (
    <ScrollView>
      <View style={styles.container} key={userDataExample}>
        <View>
        {list(navigation)}
        </View>
        <Text>History</Text>
        {history()}
        <Calendar 
          markingType={'period'}
          markedDates={markers}
        />
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  todo: {
    backgroundColor: '#c4c4c4',
    margin: 10,
    height: 40,
    width: "80%",
    alignSelf: 'center',
    padding: 5,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    borderColor: "black",
    justifyContent: 'center',
  },
  circle: {
    flex: 1,
    backgroundColor: "green",
    borderRadius: 10
  },
  todoText: {
    flex: 5,
    fontSize: 18,
    marginLeft: 10,
  }
});
