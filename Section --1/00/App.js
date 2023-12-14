import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Text } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <Text>HELLO FIRAT!!!</Text>
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}
