import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { DisplayAge } from "../DisplayAge/DisplayAge";
import { DisplayFruit } from "../DisplayFruit/DisplayFruit";
export function AgeCounter() {
  const [age, setAge] = useState(13);
  const [fruit, setFruit] = useState("banana");

  function increaseAge() {
    setAge(age + 1);
    console.log("I render  ", age);
  }

  function changeFruit() {
    setFruit("Apple");
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
      <TouchableOpacity
        onPress={changeFruit}
        style={{ backgroundColor: "#00A2FF" }}
      >
        <Text style={{ fontSize: 40, color: "white" }}>Change my fruit!!</Text>
      </TouchableOpacity>
      <DisplayFruit fruit={fruit} />
    </>
  );
}
