import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import GradientPngCard from '../components/GradientPngCard';
import { useState, useEffect } from 'react';
import DayCard from '../components/DayCard';

const HomeScreen = () => {
  const [time, setTime] = useState('');
  const [daysStreak, setDaysStreak] = useState(3);
  const [goals, setGoals] = useState([
    'قراءة كتاب',
    'ممارسة الرياضة',
    'تحسين المهارات الشخصية',
    'التواصل مع الأصدقاء والعائلة',
    'تعلم شيء جديد',
    'الاسترخاء والتأمل',
    'كتابة يوميات',
    'تطوير الذات',
    'تحقيق الأهداف الشخصية',
    'العمل على مشروع شخصي',
    'تحسين الصحة العامة',
    'تنظيم الوقت بشكل أفضل',
    'تعلم لغة جديدة',
    'المشاركة في الأنشطة الاجتماعية',
    'تطوير مهارات جديدة',
    'الاستمتاع بالهوايات المفضلة',
    'تحسين مهارات التواصل',
    'العمل على تحقيق التوازن بين العمل والحياة الشخصية',
    'المشاركة في التطوع أو الأعمال الخيرية',
    'تحسين الصحة العقلية والعاطفية',
    'تطوير مهارات القيادة والإدارة',
    'تحقيق النجاح المهني',
    'تحقيق الاستقلال المالي',
    'تحسين العلاقات الشخصية',
    'تحقيق الرضا الشخصي والسعادة',
    'تحقيق التوازن بين الحياة الشخصية والمهنية',
    'تحسين مهارات التفكير النقدي',
    'تحقيق الأهداف الأكاديمية',
    'تحسين مهارات الكتابة والتعبير',
    'تحقيق النجاح في المشاريع الشخصية',
    'تحسين مهارات التنظيم والتخطيط',
    'تحقيق التقدم الشخصي المستمر',
    'تحقيق الرضا الذاتي والنجاح الشخصي',
    'تحقيق التوازن بين العمل والحياة الشخصية',
    'تحسين مهارات التفكير الإبداعي',
  ]);
  const baseDate = new Date();

  const offsets = {
    c1: { notification: false, num: -1 },
    c2: { notification: false, num: 0 },
    c3: { notification: false, num: 1 },
    c4: { notification: false, num: 2 }, // maybe no notification today?
    c5: { notification: true, num: 3 },
    c6: { notification: false, num: 4 },
    c7: { notification: true, num: 5 },
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateTime(); // Initial call to set time immediately
    const intervalId = setInterval(updateTime, 1000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <GradientPngCard
          title={`${time}`}
          description="الاختبارات النهائية"
          imageSource={require('../assets/3d/desk_lamp.png')}
          imageSize={230}
          from="#FF5733"
          to="#FFC300"
          bctitle="اقتباس اليوم"
          bcdescreption="“الصبر معطية يسير ببطء لكنه يوصل صاحبه لما يريد”"
        />
      </View>
      <View
        style={{
          marginVertical: 14,
          flexDirection: 'row',
          gap: 6,
          justifyContent: 'center',
          direction: 'rtl',
        }}>
        {Object.values(offsets).map((offset, index) => (
          <DayCard
            key={index}
            num={offset.num}
            baseDate={baseDate}
            notification={offset.notification}
          />
        ))}
      </View>
      <View
        style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <GradientPngCard
          width="48%"
          height="300"
          from="#1671e9ff"
          to="#6edfdfff"
          title={`الاهداف `}
          list={goals}
          titleSize={48}
          imageSource={require('../assets/goal.png')}
          imageSize={130}
          bctitle="غير مكتمل"
          bcdescreption="الحالة"
        />
        <View
          style={{
            width: '48%',
            gap: 15,
          }}>
          <ImageBackground
            source={require('../assets/white_pointed_background.png')}
            resizeMode="cover"
            imageStyle={{ borderRadius: 8 }}
            style={{
              width: '100%',
              height: 142.5,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 8,
              overflow: 'hidden',
            }}>
            <View
              style={{
                position: 'absolute',
                height: 80,
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
                shadowColor: '#000',
                top: 10,
                backgroundColor: '#ffffff',
                borderWidth: 1,
                borderColor: '#f9f9f9',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                borderRadius: 50,
              }}>
              <Image
                source={require('../assets/fire.png')}
                style={{ width: 30, height: 50, ...(daysStreak == 0 ? { tintColor: 'gray' } : {}) }}
              />
            </View>
            <Text
              style={{
                fontSize: 42,
                marginTop: 42,
                textShadowColor: 'black', // border color
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
                color: '#000000ff',
                elevation: 1,
                fontWeight: 'bold',
              }}>
              {daysStreak}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: '#000000ff',
                textShadowColor: 'black',
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 1,
              }}>
              سلسلة الاسبوع
            </Text>
          </ImageBackground>
          <GradientPngCard
            height="142.5"
            from="#a252ff"
            to="#bb55ff99"
            title="?"
            description="سؤال اليوم"
            imageSource={require('../assets/3d/creative_idea.png')}
            imageSize={100}
          />
        </View>
      </View>
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
