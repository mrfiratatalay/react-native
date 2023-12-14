import { View, Image, Text, TouchableOpacity } from "react-native";
import { s } from "./ProfilCard.style";
import { FontAwesome } from "@expo/vector-icons";

export function ProfilCard({
  firstName,
  lastName,
  age,
  isOpentoWork,
  car,
  doSomething,
  img,
  children,
  isHappy,
}) {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <View>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/200" }}
          />

          {img}
        </View>

        <View style={s.texts}>
          <View>
            <Text style={s.name}>
              {children} {firstName} {lastName}
            </Text>
          </View>
          <View>
            <Text>
              {doSomething()} My name is {firstName} and my age is {age}. I am
              possionate to coding in ReactNative. I have a car. Its name is
              {car.brand}. It is limit {car.maxSpeed}.
            </Text>

            {isOpentoWork ? (
              <Text
                style={{
                  fontSize: 17,
                  color: "purple",
                  backgroundColor: "yellow",
                }}
              >
                I am open to work
              </Text>
            ) : (
              <Text
                style={{
                  fontSize: 17,
                  color: "purple",
                  backgroundColor: "yellow",
                }}
              >
                I am not looking for a job
              </Text>
            )}
          </View>
        </View>
      </View>

      <View style={s.social}>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>
        <TouchableOpacity style={s.socialBtn}>
          <FontAwesome name="github" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
