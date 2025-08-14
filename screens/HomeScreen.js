import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Image } from 'react-native-svg';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#5691c8', '#457fca']}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 16,
          width: '100%',
          height: 200,
          alignItems: 'center',
          paddingHorizontal: 16,
          borderRadius: 4,
        }}>
        <Image source={require('../assets/avatars/av1.png')} style={{ width: 100, height: 100 }} />
        <Text style={{ textAlign: 'right', width: '100%', fontWeight: 'bold', color: 'white' }}>
          المرحلة الدراسية
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
