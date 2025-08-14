import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinkLogoCard from 'components/LinkLogoCard';
import { LinearGradient } from 'expo-linear-gradient';
import GradientPngCard from '../components/GradientPngCard';

const ResourcesScreen = () => {
  const educationLevel = 'الثانية الثانوية';
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>إحصائيات الموارد</Text>

        <GradientPngCard
          title=" الحقيبة "
          titleSize={50}
          description=""
          imageSource={require('../assets/3d/school_bag.png')}
          imageSize={230}
          from="#FF5733"
          to="#FFC300"
          bctitle=" استكشف"
          bcdescreption={`المصادر المتاحة لمستوى ${educationLevel}`}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 6,
          }}>
          <View
            style={{
              backgroundColor: '#8ABB6C',
              padding: 8,
              borderRadius: 8,
              height: 110,
              width: 110,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: 'light', fontSize: 14, textAlign: 'right' }}>
              عدد الكتب المقروة بالكامل
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
                textAlign: 'center',
                width: 100,
                color: 'white',
                textShadowColor: 'black',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
              }}>
              15
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#9ECAD6',
              padding: 8,
              borderRadius: 8,
              height: 110,
              width: 90,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: 'light', fontSize: 14, textAlign: 'right' }}>
              المادة الاكثر تصفحا{' '}
            </Text>
            <Text
              style={{
                fontWeight: 'light',
                fontSize: 16,
                textAlign: 'center',
                width: 100,
                color: 'white',
                textShadowColor: 'black',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
              }}>
              الرياضيات
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#FFCB61',
              padding: 8,
              borderRadius: 8,
              height: 110,
              width: 140,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: 'light', fontSize: 14, textAlign: 'right' }}>
              عدد الموارد التي تم فتحها
            </Text>
            <Text style={{ fontWeight: 'light', fontSize: 10, textAlign: 'right', width: 100,color: 'white' , textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1  }}>
              5 هذا اليوم
            </Text>
            <Text style={{ fontWeight: 'light', fontSize: 10, textAlign: 'right', width: 100,color: 'white' , textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1  }}>
              20 هذا الاسبوع
            </Text>
            <Text style={{ fontWeight: 'light', fontSize: 10, textAlign: 'right', width: 100,color: 'white' , textShadowColor: 'black', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 1  }}>
              100 هذا الشهر
            </Text>
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
