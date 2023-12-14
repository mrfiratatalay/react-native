import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
import { Alert, Text } from "react-native";
import { useState } from "react";

export default function App() {
  function hello() {
    Alert.alert("Hello !");
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <ProfilCard
          onPressTitle={hello}
          firstName={"Codiku"}
          lastName={"TheDev"}
          age={30}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
