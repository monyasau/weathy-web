import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { RewardedAd, RewardedAdEventType, TestIds } from 'react-native-google-mobile-ads';


function RewardedAdComponent(adUnitId) {
    const rewarded = RewardedAd.createForAdRequest(adUnitId.adUnitId, {
      keywords: ['fashion', 'clothing'],
    });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribeLoaded = rewarded.addAdEventListener(RewardedAdEventType.LOADED, () => {
      setLoaded(true);
      console.log("Ad loaded");
    });
    const unsubscribeEarned = rewarded.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      reward => {
        console.log('User earned reward of ', reward);
      },
    );

    // Start loading the rewarded ad straight away
    rewarded.load();

    // Unsubscribe from events on unmount
    return () => {
      // unsubscribeLoaded();
      // unsubscribeEarned();
    };
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    console.log("No ads found");
    return (  <Button
      title="Rewarded Ad not available, Try again"
      onPress={() => {
        rewarded.load();
        setLoaded(false); // Reset loaded state when ad is shown
      }}
    />);
  }

  return (
    <Button
      title="Show Rewarded Ad"
      onPress={() => {
        rewarded.show();
        setLoaded(false); // Reset loaded state when ad is shown
      }}
    />
  );
}
export default RewardedAdComponent;