import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Profile from '../Pages/Profile';
import Home from '../Pages/Home';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Retail from '../Pages/Retail';
import Offers from '../Pages/Offers';
import OfferSvg from '../components/media/svg/Offers';
import UserSvg from '../components/media/svg/user';
import RetailSvg from '../components/media/svg/retail';
import HomeSvg from '../components/media/svg/home';
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
            tabBarIcon: ({ color, size }) => <HomeSvg fill={color} />,
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Retail"
          component={Retail}
          options={{
            tabBarIcon: ({ color, size }) => (
              <RetailSvg size={size} fill={color} />
            ),
            tabBarLabel: 'Retail',
          }}
        />
        <Tab.Screen
          name="Offers"
          component={Offers}
          options={{
            tabBarIcon: ({ color, size }) => <OfferSvg fill={color} />,
            tabBarLabel: 'Offers',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => <UserSvg fill={color} />,
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default Router;
