import { ScrollView } from "react-native";
import NavBar from "../components/NavBar";
import HomePage from "@/components/pages/homepage";
import AboutPage from "@/components/pages/aboutpage";

export default function RootLayout() {
  return (
    <>
      <NavBar />
      <ScrollView style={{ flex: 1, width: "100%" }}>
        <HomePage />
        <AboutPage />
      </ScrollView>
    </>
  );
}
