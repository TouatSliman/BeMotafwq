import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinkLogoCard from 'components/LinkLogoCard';
import { LinearGradient } from 'expo-linear-gradient';

const ResourcesScreen = () => {
  const educationLevel = ' الثانوية';
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>إحصائيات الموارد</Text>
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
          <Text style={{ textAlign: 'right', width: '100%', fontWeight: 'bold', color: 'white' }}>
            المرحلة الدراسية : {educationLevel}
          </Text>
        </LinearGradient>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 8,
              borderRadius: 4,
              height: 80,
              width: '30%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>عدد الكتب</Text>
            <Text>15</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              padding: 8,
              borderRadius: 4,
              height: 80,
              width: '30%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>
              عدد مقاطع الفيديو
            </Text>
            <Text>10</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              padding: 8,
              borderRadius: 4,
              height: 80,
              width: '30%',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>
              عدد الامتحانات
            </Text>
            <Text>5</Text>
          </View>
        </View>
        <Text style={styles.title}>اختر من بين افضل المصادر</Text>
        <LinkLogoCard
          title="فيديوهات يوتيوب"
          subtitle="مقاطع الفيديو على يوتيوب تسهل التعلم"
          icon={<Ionicons name="logo-youtube" size={24} />}
        />
        <LinkLogoCard
          title="موسوعة الكتب"
          subtitle="استكشف مجموعة واسعة من الكتب"
          icon={<Ionicons name="book" size={24} />}
        />
        <LinkLogoCard
          title="بطاقات تعليمية"
          subtitle="بطاقات تعليمية لمساعدتك على التعلم"
          icon={<Ionicons name="copy-sharp" size={24} />}
        />
        <LinkLogoCard
          title="امتحانات سابقة"
          subtitle="استعد لامتحاناتك مع هذه الموارد"
          icon={<Ionicons name="school" size={24} />}
        />
        <LinkLogoCard
          title="المجتمع"
          subtitle="انضم إلى منتديات المجتمع"
          icon={<Ionicons name="people" size={24} />}
        />
        <LinkLogoCard
          title="الدعم"
          subtitle="احصل على المساعدة من فريق الدعم لدينا"
          icon={<Ionicons name="help-circle" size={24} />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginBottom: 70,
  },
  title: {
    fontSize: 12,
    color: 'gray',
    fontWeight: 'semibold',
    textAlign: 'right',
    marginBottom: 6,
  },
});

export default ResourcesScreen;
