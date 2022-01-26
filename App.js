import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Intro from "./src/navigations/Intro";

export default function App() {
  return (
    <NavigationContainer>
      <Intro />
    </NavigationContainer>
  );
}