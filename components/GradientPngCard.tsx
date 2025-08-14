import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image, ColorValue } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

interface GradientPngCardProps {
  title: string;
  description: string;
  bctitle: string;
  bcdescreption: string;
  from: ColorValue;
  to: ColorValue;
  imageSource: any;
  height?: any;
  width?: any;
  imageSize: any;
  titleSize: any;
  list?: string[];
}

export default function GradientPngCard({
  from,
  to,
  imageSource,
  title,
  description,
  bctitle,
  bcdescreption,
  height = 240,
  width = '100%',
  imageSize,
  titleSize = 60,
  list,
}: GradientPngCardProps) {
  return (
    <LinearGradient
      colors={[from, to]}
      style={{
        height: height,
        width: width,
        borderRadius: 8,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 16,
          width: '100%',
          height: 150,
          alignItems: 'center',
          paddingHorizontal: 16,
          borderRadius: 4,
          ...(list && list.length > 0 ? { position: 'absolute', overflow: 'hidden' } : {}),
        }}>
        <Image
          source={imageSource}
          style={{
            width: imageSize,
            height: imageSize,
            ...(bctitle
              ? {
                  marginBottom: 20,
                  marginLeft: -60,
                  transform: [{ scaleX: -1 }],
                }
              : {}),
          }}
        />
        <View style={{ alignItems: 'flex-end', marginLeft: -100 }}>
          <Text style={{ color: 'white', fontSize: 16, textAlign: 'right' }}>{description}</Text>
          <Text
            style={{
              textAlign: 'left',
              fontWeight: 'bold',
              color: 'white',
              fontSize: titleSize,
            }}>
            {title}
          </Text>
        </View>
      </View>
      {list && list.length > 0 && (
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 110,
            direction: 'rtl',
          }}>
          {list.slice(0, 3).map((item, index) => (
            <View style={{ flexDirection: 'row', marginVertical: 4 }} key={index}>
              <Fontisto name="checkbox-active" size={14} />
              <Text style={{ color: 'white', fontSize: 14, marginHorizontal: 5 }}>{item}</Text>
            </View>
          ))}
        </View>
      )}
      {bctitle && bcdescreption.length > 0 && (
        <View
          style={{
            marginHorizontal: 16,
            marginBottom: 16,
            alignItems: 'center',
            paddingVertical: 8,
            justifyContent: 'center',
            backgroundColor: '#00000080',
            borderRadius: 8,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
          }}>
          <Text style={{ color: 'white', fontSize: 18 }}>{bctitle}</Text>
          <Text style={{ color: 'white', fontSize: 12 }}>{bcdescreption}</Text>
        </View>
      )}
    </LinearGradient>
  );
}
