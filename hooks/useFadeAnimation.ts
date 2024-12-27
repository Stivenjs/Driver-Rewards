import { useRef, useEffect } from "react";
import { Animated } from "react-native";

const useFadeAnimation = (duration: number = 1000, toValue: number = 5) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue,
      duration,
      useNativeDriver: true,
    }).start();
  }, [toValue, duration]);

  return fadeAnim;
};

export default useFadeAnimation;
