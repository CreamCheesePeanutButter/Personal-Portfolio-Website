import { Link } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

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
      {/* Logo */}
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
        MyApp
      </Text>

      {/* Navigation Links */}
      <View style={{ flexDirection: "row", gap: 16 }}>
        {/* <Link href="/" asChild>
          <TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 16 }}>Home</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/about" asChild>
          <TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 16 }}>About</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/contact" asChild>
          <TouchableOpacity>
            <Text style={{ color: "#fff", fontSize: 16 }}>Contact</Text>
          </TouchableOpacity>
        </Link> */}
      </View>
    </View>
  );
}
