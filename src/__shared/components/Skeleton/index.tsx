import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface SkeletonProps {
  type?: 'rectangle' | 'circle';
  width: number | string;
  height: number;
  duration?: number;
  style?: StyleProp<ViewStyle>;
}

const Skeleton: React.FC<SkeletonProps> = ({
  type = 'rectangle',
  width,
  height,
  duration = 1000,
  style,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration,
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ]),
    );

    pulseAnimation.start();

    return () => {
      pulseAnimation.stop();
    };
  }, [animatedValue, duration]);

  const pulseInterpolation = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.6, 0.8], // Adjust the opacity range based on your preference
  });

  const borderRadius = type === 'circle' ? height / 2 : 4;

  const skeletonStyles = [
    styles.skeleton,
    {width, height, borderRadius, opacity: pulseInterpolation},
    style,
  ];

  return <Animated.View style={skeletonStyles as ViewStyle} />;
};

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: '#e0e0e0', // Placeholder color
  },
});

export default Skeleton;
