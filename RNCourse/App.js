import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals]=useState([]);
  function goalInputHandler(enteredText){
setEnteredGoalText(enteredText)
  }
  function addGoalHandler() {
setCourseGoals(currentCourseGoals=>[...currentCourseGoals,enteredGoalText])
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your course goal" style={styles.textInput} onChangeText={goalInputHandler}/>
        {/* no style property for button */}
        <Button title="Add Goal" onPress={addGoalHandler}/>
      </View>
      <View style={styles.goalsContainer}>
        
        {courseGoals.map((goal)=><View style={styles.goalItem} key={goal+1}><Text  style={styles.goalText}>{goal}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex:1
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    flex:1
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer:{
flex:3
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
   
  },
  goalText:{
    color:'white'
  }
});
