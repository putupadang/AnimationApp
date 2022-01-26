import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

import LottieView from "lottie-react-native";

const Congrats = ({ navigation }) => {
  const lottieRef = React.useRef(null);
  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        ref={lottieRef}
        style={{
          width: 400,
          height: 400,
        }}
        source={require("../../../assets/congratulation.json")}
        loop={false}
        onAnimationFinish={() => {
          navigation.navigate("Landing");
        }}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
    </View>
  );
};

export default Congrats;

const styles = StyleSheet.create({
  container: {
    paddingTop: "15%",
    paddingHorizontal: "5%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#00C3FF",
  },
});
