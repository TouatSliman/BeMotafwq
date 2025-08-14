import { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

interface DayCardProps {
  num: number; // offset from today
  baseDate: Date;
  notification: boolean;
}

export default function DayCard({ num = 0, baseDate, notification }: DayCardProps) {
  const [day, setDay] = useState({ name: '', number: '', isToday: false });

  useEffect(() => {
    function setDayByNumber(daysNum: number) {
      const targetDate = new Date(baseDate);
      targetDate.setDate(baseDate.getDate() + daysNum);

      const dayNames = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
      const name = dayNames[targetDate.getDay()];
      const number = targetDate.getDate().toString();

      // Check if targetDate is the same day as baseDate
      const isToday =
        targetDate.getDate() === baseDate.getDate() &&
        targetDate.getMonth() === baseDate.getMonth() &&
        targetDate.getFullYear() === baseDate.getFullYear();

      setDay({ name, number, isToday });
    }

    setDayByNumber(num);
  }, [num, baseDate]);

  const textColor = day.isToday ? 'white' : 'black';
  const backgroundColor = day.isToday ? 'black' : 'white';

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: 'black',
        width: 45,
        height: 80,
        borderRadius: 15,
        backgroundColor,
        gap: 6,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: textColor,
          textAlign: 'center',
          ...(notification ? { backgroundColor: textColor } : {}),
          width: 10,
          height: 10,
          marginHorizontal: 'auto',
          borderRadius: 15,
          marginBottom: 14,
        }}>
        !
      </Text>
      <Text
        style={{
          color: textColor,
          textAlign: 'center',
          fontSize: 12,
          fontWeight: 'bold',
        }}>
        {day.name}
      </Text>
      <Text
        style={{
          color: textColor,
          textAlign: 'center',
          fontSize: 11,
        }}>
        {day.number}
      </Text>
    </View>
  );
}
