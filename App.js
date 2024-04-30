import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "expo-dev-client";
import Weathy from "./components/Weathy";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  RewardedAd
} from "react-native-google-mobile-ads";
import TopNav from "./components/TopNav";

export default function App() {
  const BannerAdUnitId = "ca-app-pub-2165582252373154/5631183082";
  const RewardedAdUnitId = __DEV__ ? TestIds.REWARDED : 'ca-app-pub-2165582252373154/4559496768';

  return (
    <>
      <View className="flex-1 items-center justify-center pt-8 bg-white">
        <StatusBar style="auto" />
        <TopNav/>
        <Weathy />
      </View>
      <BannerAd
      className=""
        unitId={BannerAdUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: false,
        }}
      />
    </>
  );
}
