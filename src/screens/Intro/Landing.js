import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import React, { useEffect } from "react";

const Landing = ({ navigation }) => {
  const offset = useSharedValue(300);

  const animatedStyles = useAnimatedStyle(() => {
    return { transform: [{ translateX: offset.value }] };
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      offset.value = withSpring(0);
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <View style={[styles.container]}>
      <Animated.View
        style={[
          animatedStyles,
          {
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          },
        ]}
      >
        <Text style={styles.text}>ANIMATION APP</Text>
        <Pressable
          onPress={() => {
            offset.value = withSpring(300);
            setTimeout(() => {
              navigation.navigate("Intro");
            }, 200);
          }}
          style={styles.btn}
        >
          <Text style={{ color: "white" }}>Continue</Text>
        </Pressable>
      </Animated.View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  container: {
    paddingTop: "15%",
    paddingHorizontal: "5%",

    flex: 1,
    backgroundColor: "#091A67",
  },
  text: { color: "white", fontWeight: "700", fontSize: 30 },
  btn: {
    position: "absolute",
    bottom: "10%",
    backgroundColor: "#FB009F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
  },
});
