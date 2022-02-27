import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const userDataExample = {
    "_id": "wrvevre",
    "email":"tsaomaxwell@gmail.com",
    "name":"Maxwell",
    "routine": [
        {
            "activity":"yoga",
            "datesDone":[new Date(), new Date(2022, 1, 25), new Date(2022, 1, 22)]
        },
        {
            "activity":"healthy bkfast",
            "datesDone":[new Date(), new Date(2022, 1, 25), new Date(2022, 1, 22)]
        },
        {
          "activity":"running",
          "datesDone":[new Date(), new Date(2022, 1, 25)]
        },
        {
          "activity":"reading",
          "datesDone":[new Date(), new Date(2022, 1, 25)]
      }
    ]
}

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
      return "white";
    }
    const color = findColor();
    return (
      <TouchableOpacity key={activity.activity} style = {styles.todo} onPress={() => navigation.navigate('Post')}>
        <View style={[styles.circle,{backgroundColor: color}]}/>
        <Text style={styles.todoText}>{activity.activity}</Text>
      </TouchableOpacity>
    );
  });
};

export default function Dashboard({ navigation }) {
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
              {startingDay: true, endingDay: true, color: 'green', textColor: 'white'};
        }
      }
    return calendarMarking;
  }
  const markers = makeCalDates();
  return (
    <ScrollView>
      <View style={styles.container}>
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
