import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { DisplayAge } from "../DisplayAge/DisplayAge";
export function AgeCounter() {
  const [age, setAge] = useState(13);
  function increaseAge() {
    setAge(age + 1);
    console.log("I render  ", age);
  }
  return (
    <>
      <TouchableOpacity
        onPress={increaseAge}
        style={{ backgroundColor: "#00A2FF" }}
      >
        <Text style={{ fontSize: 40, color: "white" }}>Increse me!!</Text>
      </TouchableOpacity>
      <DisplayAge age={age} />
    </>
  );
}
