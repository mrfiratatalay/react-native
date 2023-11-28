import { Text, View } from "react-native";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { s } from "./components/ProfilCard/ProfilCard.style";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <ProfilCard />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
