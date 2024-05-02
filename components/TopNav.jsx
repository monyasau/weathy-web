import { useFonts } from "expo-font";
import { Text } from "react-native";

const TopNav = () => {
  const [fontsLoaded] = useFonts({
    Rooster: require("./assets/fonts/Rooster.ttf"),
  });
  return (
    <>
      <Text style={{ fontSize: 50, fontFamily: "Rooster" }} className="p-3">
        Weathy
      </Text>
    </>
  );
};

export default TopNav;
