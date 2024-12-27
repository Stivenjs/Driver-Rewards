import React from "react";
import { Animated, ViewStyle, StyleProp } from "react-native";
import useFadeAnimation from "@/hooks/useFadeAnimation";

interface FadeViewProps {
  children: React.ReactNode;
  duration?: number;
  style?: StyleProp<ViewStyle>;
}

const FadeView: React.FC<FadeViewProps> = ({
  children,
  duration = 1000,
  style,
}) => {
  const fadeAnim = useFadeAnimation(duration);

  return (
    <Animated.View style={[{ opacity: fadeAnim }, style]}>
      {children}
    </Animated.View>
  );
};

export default FadeView;
