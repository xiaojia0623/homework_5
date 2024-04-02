import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//套件引用
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

//首頁 頁面相關
import HomeScreen from './src/details/HomeScreen';
import CeremicDetailHistory from './src/details/CeremicDetailHistory';
import CeremicDetailIntro from './src/details/CeremicDetailIntro';
import CeremicDetailStep from './src/details/CeremicDetailStep';
import CeremicDetailResult from './src/details/CeremicDetailResult';
import CeremicDetailProess from './src/details/CeremicDetailProess';

//應用頁面相關
import ProfileScreen from './src/details/ProfileSreen';
import AviationTechnology from './src/details/AviationTechnology';
import BiomedicalScience from './src/details/BiomedicalScience';
import Electronic from './src/details/Electronic';
import AutomobileIndustry from './src/details/AutomobileIndustry';
import OpticalIndustry from './src/details/OpticalIndustry';

//宣告
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyHomeStack(){
  return (
    <Stack.Navigator initialRouteName='首頁' screenOptions={{
      headerStyle:{backgroundColor:'rgb(176, 107, 66)'},
      //headerBackTitle:'返回',
      // headerBackTitleVisible: true,
      headerTintColor:'white'
    }}>
      <Stack.Screen name="首頁" component={HomeScreen} />
      <Stack.Screen name="CeremicHistory" component={CeremicDetailHistory} options={{title:'陶與瓷'}}/>
      <Stack.Screen name="CeremicIntro" component={CeremicDetailIntro} options={{title:'陶瓷介紹'}}/>
      <Stack.Screen name="CeremicStep" component={CeremicDetailStep} options={{title:'陶瓷生產步驟'}}/>
      <Stack.Screen name="CeremicResult" component={CeremicDetailResult} options={{title:'陶瓷的成形'}}/>
      <Stack.Screen name="CeremicProess" component={CeremicDetailProess} options={{title:'陶瓷燒結過程'}}/>
    </Stack.Navigator>
  )
}

function MyProfileStack(){
  return (
    <Stack.Navigator initialRouteName='陶瓷的應用' screenOptions={{
      headerStyle:{backgroundColor:'rgb(176, 107, 66)'},
      //headerBackTitle:'返回',
      // headerBackTitleVisible: true,
      headerTintColor:'white'
    }}>
      <Stack.Screen name="陶瓷的應用" component={ProfileScreen} />
      <Stack.Screen name="Technology" component={AviationTechnology} options={{title:'航空航天技術'}}/>
      <Stack.Screen name="Science" component={BiomedicalScience} options={{title:'生物醫學'}}/>
      <Stack.Screen name="ElectronicTechnology" component={Electronic} options={{title:'電子行業'}}/>
      <Stack.Screen name="Automobile" component={AutomobileIndustry} options={{title:'汽車行業'}}/>
      <Stack.Screen name="Optical" component={OpticalIndustry} options={{title:'光學行業'}}/>
    </Stack.Navigator>
  )
}



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route})=> ({
        tabBarIcon:({focused,color, size}) => {
          let iconName;
            if (route.name === '首頁') {
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';
            } else if (route.name === '應用') {
              iconName = focused ? 'list' : 'list-outline';
            }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown:false,
      })}>
        <Tab.Screen name="首頁" component={MyHomeStack} />
        <Tab.Screen name="應用" component={MyProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2691E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
