import React, { useEffect, useRef, ReactNode } from 'react';
import { Animated } from 'react-native';

interface AnimatedProps {
  children: ReactNode;
  distance?: number;
  duration?: number;
}

// Slide Up + Fade In
export const SlideUpFadeIn: React.FC<AnimatedProps> = ({
  children,
  distance = 200,
  duration = 1000,
}) => {
  const slideAnim = useRef(new Animated.Value(distance)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideAnim, opacityAnim, duration]);

  return (
    <Animated.View style={{ transform: [{ translateY: slideAnim }], opacity: opacityAnim }}>
      {children}
    </Animated.View>
  );
};

// Slide Down + Fade In
export const SlideDownFadeIn: React.FC<AnimatedProps> = ({
  children,
  distance = 200,
  duration = 1000,
}) => {
  const slideAnim = useRef(new Animated.Value(-distance)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideAnim, opacityAnim, duration]);

  return (
    <Animated.View style={{ transform: [{ translateY: slideAnim }], opacity: opacityAnim }}>
      {children}
    </Animated.View>
  );
};

// Slide Left + Fade In
export const SlideLeftFadeIn: React.FC<AnimatedProps> = ({
  children,
  distance = 200,
  duration = 1000,
}) => {
  const slideAnim = useRef(new Animated.Value(distance)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideAnim, opacityAnim, duration]);

  return (
    <Animated.View style={{ transform: [{ translateX: slideAnim }], opacity: opacityAnim }}>
      {children}
    </Animated.View>
  );
};

// Slide Right + Fade In
export const SlideRightFadeIn: React.FC<AnimatedProps> = ({
  children,
  distance = 200,
  duration = 1000,
}) => {
  const slideAnim = useRef(new Animated.Value(-distance)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }),
    ]).start();
  }, [slideAnim, opacityAnim, duration]);

  return (
    <Animated.View style={{ transform: [{ translateX: slideAnim }], opacity: opacityAnim }}>
      {children}
    </Animated.View>
  );
};

export const FadeInOnly: React.FC<AnimatedProps> = ({ children }) => {
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [opacityAnim]);

  return <Animated.View style={{ opacity: opacityAnim }}>{children}</Animated.View>;
};
