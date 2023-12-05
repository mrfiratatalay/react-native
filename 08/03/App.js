import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
import { Alert, Text, Linking } from "react-native";
import { useState } from "react";

export default function App() {
  function goToGithub() {
    Linking.openURL("https://github.com/mrfiratatalay");
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <ProfilCard
          onPressGithub={goToGithub}
          firstName={"Codiku"}
          lastName={"TheDev"}
          age={30}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
