import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import VerticalList from "./VerticalList";
import mockData from "./assets/mockData";

export default function App() {
  return (
    <View style={styles.container}>
      <VerticalList data={mockData} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
  },
});
