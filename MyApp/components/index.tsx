import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const STYLES = StyleSheet.create({
  pageframe: {
    width: width, // full screen width
    height: height, // full screen height
  },
});

export default STYLES;
