import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useRef } from 'react';
import { Animated, View, Text, StyleSheet, ViewStyle } from 'react-native';

const Days = [
  { day: 'الاحد', streak: null },
  { day: 'الاثنين', streak: null },
  { day: 'الثلثاء', streak: null },
  { day: 'الاربعاء', streak: null },
  { day: 'الخميس', streak: null },
  { day: 'الجمعة', streak: null },
  { day: 'السبت', streak: null },
];

type DayBlock = {
  isToday?: boolean;
  day: string;
  streak?: number | null;
};

const DayBlock = ({ isToday = false, day, streak = null }: DayBlock) => {
  const glowAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glowAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false, // shadow/elevation can't use native driver
        }),
        Animated.timing(glowAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  const animatedStyle: Animated.WithAnimatedObject<ViewStyle> = {
    shadowRadius: glowAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [6, 14],
    }),
    shadowColor: '#0ff',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 0 },
    elevation: glowAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [6, 14],
    }),
  };

  return (
    <View style={{ justifyContent: 'center' }}>
      <Text
        style={[
          styles.streakText,
          streak === 0 && styles.streakTextRed,
          streak !== 0 && streak !== 1 && styles.streakTextInactive,
        ]}>
        {day}
      </Text>
      <Animated.View
        style={[
          styles.dayBlock,
          isToday && styles.today,
          isToday && animatedStyle,
          streak === 1 && styles.neonGreen,
          streak === 0 && styles.neonRed,
        ]}>
        {streak !== null && (
          <Ionicons
            name={streak === 1 ? 'flame' : streak === 0 ? 'close' : 'ellipse-outline'}
            size={32}
            style={[
              styles.iconBase,
              streak === 1 && styles.iconGreen,
              streak === 0 && styles.iconRed,
              streak !== 0 && streak !== 1 && styles.iconInactive,
            ]}
          />
        )}
      </Animated.View>
    </View>
  );
};

const Streak = () => {
  return (
    <View style={styles.container}>
      {Days.map((day, index) => (
        <DayBlock
          key={index}
          isToday={index === new Date().getDay()}
          day={day.day}
          streak={day.streak ?? null}
        />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  close: {
    backgroundColor: 'red',
  },
  check: {
    backgroundColor: 'green',
  },
  dayBlock: {
    width: 40,
    height: 40,
    borderRadius: 8,
    margin: 4,
    backgroundColor: '#000', // default background
    justifyContent: 'center',
    alignItems: 'center',
  },

  dayText: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  today: {
    borderWidth: 3,
    borderColor: '#0ff', // Neon cyan border
    shadowColor: '#0ff', // Same cyan glow
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 12, // Strong glow radius
    elevation: 12, // Android glow
    backgroundColor: 'rgba(0, 255, 255, 0.15)', // Slight translucent cyan bg
  },
  neonGreen: {
    backgroundColor: '#00ff00',
    shadowColor: '#00ff00',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10, // Android
  },
  neonRed: {
    backgroundColor: '#ff0000',
    shadowColor: '#ff0000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10, // Android
  },
  streakText: {
    color: '#00ff00', // Neon green text color (match neonGreen block)
    fontWeight: 'bold',
    fontSize: 12,
    textShadowColor: '#00ff00', // Neon green shadow for glow
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8, // Bigger radius = softer glow
    textAlign: 'center',
  },
  streakTextRed: {
    color: '#ff0000',
    fontWeight: 'bold',
    fontSize: 12,
    textShadowColor: '#ff0000',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
    textAlign: 'center',
  },
  streakTextInactive: {
    color: '#000', // dim gray text
    textShadowColor: '#000',
    opacity: 0.4, // subtle fade
    fontSize: 12,
    textAlign: 'center',
  },
  iconBase: {
    marginTop: 4,
  },

  iconGreen: {
    color: '#fff',
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },

  iconRed: {
    color: '#fff',
    textShadowColor: '#fff',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  iconInactive: {
    color: '#fff',
    opacity: 0.4,
  },
});
export default Streak;
