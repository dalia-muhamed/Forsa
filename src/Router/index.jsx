import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../Pages/Profile';
import Home from '../Pages/Home';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Retail from '../Pages/Retail';
import Offers from '../Pages/Offers';
const Tab = createBottomTabNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: 'below-icon',
          headerShown: false,
          tabBarStyle: {
            borderTopColor: '#fff',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
          },
          labelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: '#072040',
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={size} color={color} />
            ),
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Retail"
          component={Retail}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="pen-tool" size={size} color={color} />
            ),
            tabBarLabel: 'Retail',
          }}
        />
        <Tab.Screen
          name="Offers"
          component={Offers}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user" size={size} color={color} />
            ),
            tabBarLabel: 'Offers',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="user" size={size} color={color} />
            ),
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Router;
