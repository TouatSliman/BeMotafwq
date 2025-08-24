import React, { useRef, useEffect } from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

import { LineChart } from 'react-native-gifted-charts';
import Streak from 'components/Streak';

const ProgressScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // for opacity
  const slideAnim = useRef(new Animated.Value(30)).current; // for translateY

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const customDataPoint = () => {
    return (
      <View
        style={{
          width: 10,
          height: 10,
          backgroundColor: 'white',
          borderWidth: 2,
          borderRadius: 10,
          borderColor: '#07BAD1',
        }}
      />
    );
  };
  const customLabel = (val) => {
    return (
      <View style={{ width: 70, marginLeft: 7 }}>
        <Text style={{ color: 'gray', fontWeight: 'bold' }}>{val}</Text>
      </View>
    );
  };
  const data = [
    {
      value: 6,
      labelComponent: () => customLabel('22 اوت'),
      customDataPoint: customDataPoint,
    },
    {
      value: 9,
      hideDataPoint: true,
    },
    {
      value: 7,
      customDataPoint: customDataPoint,
    },
    {
      value: 4,
      hideDataPoint: true,
    },
    {
      value: 10,
      customDataPoint: customDataPoint,
    },
    {
      value: 7,
      hideDataPoint: true,
    },
    {
      value: 9,
      customDataPoint: customDataPoint,
    },
    {
      value: 10,
      labelComponent: () => customLabel('29 اوت'),
      hideDataPoint: true,
    },
    {
      value: 7,
      customDataPoint: customDataPoint,
    },
    {
      value: 10,
      hideDataPoint: true,
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <Streak />
      </View>
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
          paddingVertical: 10,
          paddingRight: 10,
          margin: 10,
          borderRadius: 10,
          backgroundColor: '#fff',
          position: 'relative',
          height: 300,
          zIndex: -2,
        }}>
        <View style={styles.sleepHighlight} />
        <Text style={{ fontSize: 24, textAlign: 'center', fontWeight: 'bold' }}>
          عدد ساعات النوم
        </Text>
        <LineChart
          areaChart
          maxValue={12}
          yAxisTextStyle={{
            color: 'gray', // 👈 Make Y-axis numbers gray
            fontSize: 12, // optional
            fontWeight: 'bold',
          }}
          stepValue={2}
          yAxisColor="transparent" // Hides Y-axis line
          xAxisColor="transparent" // Hides X-axis line
          hideOrigin={true} // Hides origin (0,0) line
          curved
          data={data}
          startFillColor="rgb(46, 217, 255)"
          startOpacity={0.8}
          endFillColor="rgba(250, 250, 250, 1)"
          endOpacity={0.3}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sleepHighlight: {
    position: 'absolute',
    top: 75, // ~9 hours from top (adjust as needed)
    bottom: 175, // ~7 hours from bottom
    left: 0,
    right: 0,
    backgroundColor: 'rgba(133, 253, 237, 0.15)', // Soft green overlay
    zIndex: -1, // Behind the chart
  },
});

export default ProgressScreen;
