import { Text, View } from "react-native";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { s } from "./components/ProfilCard/ProfilCard.style";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <ProfilCard
          firstName={"Anjelia"}
          lastName={"Hola"}
          age={13}
          isOpentoWork={true}
          car={{ brand: "Seat", maxSpeed: 700 }}
          doSomething={function () {
            return "Welcome to learn props !!";
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
