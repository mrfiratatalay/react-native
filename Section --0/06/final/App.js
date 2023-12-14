import { Text, View, Image } from "react-native";
import { ProfilCard } from "./components/ProfilCard/ProfilCard";
import { AgeCounter } from "./components/AgeCounter/AgeCounter";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import { s } from "./components/ProfilCard/ProfilCard.style";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <AgeCounter />
        {/* <ProfilCard
          firstName={"Anjelia"}
          lastName={"Hola"}
          age={13}
          isOpentoWork={true}
          car={{ brand: "Seat", maxSpeed: 700 }}
          doSomething={function () {
            return "Welcome to learn props !!";
          }}
          img={
            <Image
              style={{ height: 30, width: 30 }}
              source={{ uri: "https://i.pravatar.cc/300" }}
            />
          }
          isHappy
        >
          Hi!!!
        </ProfilCard> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
