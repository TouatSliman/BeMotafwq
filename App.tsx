import { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProgressScreen from './screens/ProgressScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import CalendarScreen from './screens/CalendarScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="الرئيسية"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#000000',
          height: 70,
          borderTopWidth: 0,
          marginBottom: 20,
          marginHorizontal: 25,
          borderRadius: 40,
          position: 'absolute',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
          fontFamily: 'Cairo-Regular',
        },
        tabBarItemStyle: {
          paddingVertical: 8,
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#777777',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'الرئيسية':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'التقدم':
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              break;
            case 'الموارد':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'التقويم':
              iconName = focused ? 'calendar' : 'calendar-outline';
              break;
            default:
              iconName = 'ellipse';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="التقويم" component={CalendarScreen} />
      <Tab.Screen name="الموارد" component={ResourcesScreen} />
      <Tab.Screen name="التقدم" component={ProgressScreen} />
      <Tab.Screen name="الرئيسية" component={HomeScreen} />
    </Tab.Navigator>
  );
}
function AppStack() {
  const [fname, setFname] = useState('سليمان');
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Text style={{ fontSize: 12, fontWeight: 'light', color: '#000' }}>
              {new Date().getHours() < 12 ? 'صباح الخير' : 'مساء الخير'} {fname}
            </Text>
          ),
          headerRight: () => (
            <Image
              source={require('./assets/avatars/av5.png')}
              style={{ width: 30, height: 30, marginLeft: 15, borderRadius: 15 }}
              resizeMode="contain"
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Settings')}
              style={{ marginRight: 15 }}>
              <Ionicons name="settings-outline" size={24} color="#000" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: '#f2f2f2',
            borderBottomWidth: 0,
            height: 80,
            shadowColor: 'transparent',
            shadowOpacity: 0,
            elevation: 0,
          },
          headerShadowVisible: false,
          headerTransparent: false,
          headerTitleAlign: 'center',
        })}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: 'الإعدادات',
          headerStyle: { backgroundColor: '#eee' },
          headerTintColor: '#000',
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
