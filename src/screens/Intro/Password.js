import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

const Password = ({ navigation, route }) => {
  const [password, setPassword] = useState("");
  const { name } = route.params;

  const offset = useSharedValue(400);
  const offsetTextInput = useSharedValue(300);
  const offsetBtn = useSharedValue(300);
  const animatedStyles = useAnimatedStyle(() => {
    return { transform: [{ translateX: offset.value }] };
  });

  const animatedTextInputStyles = useAnimatedStyle(() => {
    return { transform: [{ translateX: offsetTextInput.value }] };
  });

  const animatedButnStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offsetBtn.value }],
    };
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      offset.value = withSpring(0);
      offsetBtn.value = withSpring(0);
      setTimeout(() => {
        offsetTextInput.value = withSpring(0);
      }, 300);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={[{ justifyContent: "center", flex: 1 }]}>
        <Animated.Text
          style={[
            animatedStyles,
            {
              fontWeight: "700",
              fontSize: 30,
              color: "white",
              position: "absolute",
              top: 0,
            },
          ]}
        >
          CREATE A PASSWORD{"\n"}HERE {name.toUpperCase()}
        </Animated.Text>
        <Animated.View
          style={[
            animatedTextInputStyles,
            {
              alignSelf: "center",
            },
          ]}
        >
          <TextInput
            autoFocus
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Password"
            placeholderTextColor={"white"}
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "700",
            }}
          />
        </Animated.View>
      </View>
      <Animated.View
        style={[
          {
            paddingVertical: 15,
            paddingHorizontal: 18,
            borderRadius: 30,
            backgroundColor: password.length === 0 ? "gray" : "#FB009F",
            position: "absolute",
            right: "5%",
            bottom: "5%",
          },
          animatedButnStyles,
        ]}
      >
        <Pressable
          disabled={password.length === 0}
          onPress={() => {
            offset.value = withSpring(400);
            offsetBtn.value = withSpring(300);
            offsetTextInput.value = withSpring(300);
            setTimeout(() => {
              navigation.navigate("Congrats");
            }, 100);
          }}
        >
          <Ionicons name="ios-arrow-forward" color="white" size={30} />
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  container: {
    paddingTop: "15%",
    paddingHorizontal: "5%",
    flex: 1,
    backgroundColor: "#00C3FF",
  },
});
