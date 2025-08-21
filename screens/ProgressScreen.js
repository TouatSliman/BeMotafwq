import { View, Text, StyleSheet } from 'react-native';
import Streak from 'components/Streak';

const ProgressScreen = () => {
  return (
    <View style={styles.container}>
      <Streak />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProgressScreen;
