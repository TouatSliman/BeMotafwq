import { ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type LinkLogoCardProps = {
  title: string;
  subtitle: string;
  icon: ReactNode;
};

const LinkLogoCard = ({ title, subtitle, icon }: LinkLogoCardProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <Ionicons name="link-outline" size={24} color="black" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.iconContainer}>{icon}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    //borderWidth: 1,
    //borderColor: 'lightgray',
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: '#ffffff',
  },
  iconContainer: {
    marginRight: 12,
    marginLeft: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'right',
  },
});

export default LinkLogoCard;
