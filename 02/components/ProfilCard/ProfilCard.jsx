import { View, Image, Text } from "react-native";
import { s } from "./ProfilCard.style";
export function ProfilCard() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/300" }}
          />
        </View>

        <View style={s.texts}>
          <View>
            <Text style={s.name}>William Hola</Text>
          </View>
          <View>
            <Text>
              Hello! My name is William. I am possionate to coding in
              ReactNative
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
