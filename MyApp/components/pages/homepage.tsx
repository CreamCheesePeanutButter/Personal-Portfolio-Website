import { Text, View, Image, StyleSheet } from "react-native";
import STYLES from "../index";
export default function HomePage() {
  return (
    <View style={STYLES.pageframe}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Hello, I&apos;m is An</Text>
        <Text style={styles.subtitle}>
          A 2nd year Computer Science student passionate about coding,
          problem-solving, and building cool projects
        </Text>
      </View>
      <View style={styles.frame}>
        <Image
          source={require("../../assets/cat.jpg")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  titleBox: {
    width: "40%",
    height: "20%",
    paddingTop: "23%",
    paddingLeft: "7%",
    justifyContent: "center", // center text vertically
    alignItems: "center", // center text horizontally
  },
  title: {
    color: "#000",
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 100, // reduce font size for responsiveness
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: 100,
  },
  subtitle: {
    paddingTop: 10,
    color: "#6b7280", // Tailwind gray-500
    textAlign: "center",
    fontFamily: "Inter",
    fontSize: 20,
    fontStyle: "normal",
  },
  frame: {
    width: "50%",
    height: "100%", // frame height
    position: "absolute",
    right: 0,
    top: 0,
    overflow: "hidden", // keeps image inside the box
  },
  image: {
    width: "100%",
    height: "150%",
  },
});
