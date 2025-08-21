import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Days = [
  { day: 'الاحد', streak: 0 },
  { day: 'الاثنين', streak: 1 },
  { day: 'الثلثاء', streak: 0 },
  { day: 'الاربعاء', streak: 1 },
  { day: 'الخميس' },
  { day: 'الجمعة' },
  { day: 'السبت' },
];

type DayBlock = {
  isToday?: boolean;
  day: string;
  streak?: number | null;
};

const DayBlock = ({ isToday = false, day, streak = null }: DayBlock) => {
  return (
    <View style={{ justifyContent: 'center' }}>
      <Text style={styles.dayText}>{day}</Text>
      <View
        style={[
          styles.dayBlock,
          isToday && styles.today,
          streak === 1 && { backgroundColor: 'green' },
          streak === 0 && { backgroundColor: 'red' },
        ]}>
        {streak !== null && (
          <Ionicons style={styles.streakText} name={streak === 1 ? 'checkmark' : 'close-outline'} />
        )}
      </View>
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
    flex: 1,
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
    padding: 10,
    height: 30,
    width: 30,
    borderRadius: 50,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  today: {
    backgroundColor: '#ff6a00b9',
  },
  dayText: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  streakText: {
    fontSize: 10,
    color: '#6c757d',
  },
});
export default Streak;
