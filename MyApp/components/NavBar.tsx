// import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function NavBar() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#1f2937", // Tailwind gray-800
      }}
    >
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
        My Portfolio
      </Text>
    </View>
  );
}
