import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { ImageBackground, Text, View } from "react-native";
import { hotBackground } from "./assets/hot.png";
export default function App() {
  return (
    <ImageBackground
      style={s.backgroundImg}
      source={{
        uri: "https://raw.githubusercontent.com/codiku/react-native-temperature-converter/002-EN-layout/assets/hot.png",
      }}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <Text>Temperature</Text>
            <Text>Input</Text>
            <Text>Button</Text>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}
