// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/

import 'react-native-gesture-handler';
import React, { useEffect ,useState} from 'react';

import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';

import
MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import {
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';


import Home from './pages/Home';
import Details from './pages/Details';
import Profile from './pages/Profile';
import Setting from './pages/Setting';
import MyCart from './pages/MyCart';
import Offer from './pages/Offer';
import Media from './pages/Media';
import Notification from './pages/Notification';
import PushNotification from 'react-native-push-notification';
import { openDatabase } from 'react-native-sqlite-storage';
import { Props } from 'react-native-image-zoom-viewer/built/image-viewer.type';

var db = openDatabase({ name: 'UserDatabase.db' });


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();




// PushNotification.configure({
//   onNotification:function (notification){
//     console.log("NOTIFICATION:",notification);
//     console.log("NOTIFICATION:",notification.title);
//     console.log("NOTIFICATION:",notification.message);
    

//   }

// });


function HomeStack(Props) {



  let [title, setTitile] = useState('');
  let [message, setMessage] = useState('');
  

  useEffect(() => {
    console.log("Empty:");

    PushNotification.configure({
      onNotification:function (notification){
        console.log("NOTIFICATION:",notification);
        console.log("NOTIFICATION:",notification.title);
        console.log("NOTIFICATION:",notification.message);

        setTitile(notification.title);
        setMessage(notification.message);
        
    
      }
    
    });



    
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(20), message VARCHAR(200))',
              []
            );
          }
        }
      );
    });

    // const { navigation} = Props;
    // console.log(Props)
    //   db.transaction(function (tx) {
    //     tx.executeSql(
    //       'INSERT INTO table_user (title, message) VALUES (?,?)',
    //       [title, message],
    //       (tx, results) => {
    //         console.log('Results_insert', results.rowsAffected);
    //         console.log('res_insert',results);
    //         if (results.rowsAffected > 0) {
    //           Alert.alert(
    //             'Notification Alert',
    //             [
    //               {
    //                 text: 'Ok',
    //                 onPress: () => navigation.navigate('Notification'),
    //               },
    //             ],
    //             { cancelable: false }
    //           );
    //         } else alert('Registration Failed');
    //       }
    //     );
    //   });

   
    
  }, []);

  
  const { navigation} = Props;
console.log(Props)
  db.transaction(function (tx) {
    tx.executeSql(
      'INSERT INTO table_user (title, message) VALUES (?,?)',
      [title, message],
      (tx, results) => {
        console.log('Results_insert', results.rowsAffected);
        console.log('res_insert',results);
        if (results.rowsAffected > 0) {
          Alert.alert(
            'Notification Alert',
            [
              {
                text: 'Ok',
                onPress: () => navigation.navigate('Notification'),
              },
            ],
            { cancelable: false }
          );
        } else alert('Registration Failed');
      }
    );
  });





  return (
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#42f44b' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'medium' }
          
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}/>
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ title: 'Notification' }} />
      </Stack.Navigator>







  );
}

function OfferStack(){
  return(
    <Stack.Navigator
    initialRouteName="Offer"
    screenOptions={{
      headerStyle: { backgroundColor: '#42f44b' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'medium' }
      
    }}>
       <Stack.Screen
        name="Offer"
        component={Offer}
        options={{ title: 'Offer' }}/>
       </Stack.Navigator>
  );
  }



  function NotificationStack(){
    return(
      <Stack.Navigator
      initialRouteName="Notification"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'medium' }
        
      }}>
         <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ title: 'Notification' }}/>
         </Stack.Navigator>
    );
    }
  



function MyCartStack(){
  return(
    <Stack.Navigator
    initialRouteName="MyCart"
    screenOptions={{
      headerStyle: { backgroundColor: '#42f44b' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'medium' }
      
    }}>
       <Stack.Screen
        name="MyCart"
        component={MyCart}
        options={{ title: 'MyCart' }}/>
       </Stack.Navigator>
  );
  }


  function MediaStack(){
    return(
      <Stack.Navigator
      initialRouteName="Media"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'medium' }
        
      }}>
         <Stack.Screen
          name="Media"
          component={Media}
          options={{ title: 'Media' }}/>
         </Stack.Navigator>
    );
    }






function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { backgroundColor: '#42f44b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'medium' }
      }}>
      <Stack.Screen
        name="Settings"
        component={Setting}
        options={{ title: 'Settings' }}/>
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: 'Details' }}/>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ title: 'Profile' }}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                size={size}
              />
            ),
          }}  />


<Tab.Screen
          name="OfferStack"
          component={OfferStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Offer',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="tag"
                color={color}
                size={size}
              />
            ),
          }}  />




<Tab.Screen
          name="MediaStack"
          component={MediaStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Media',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="folder-multiple-image"
                color={color}
                size={size}
              />
            ),
          }}  />


<Tab.Screen
          name="NotificationStack"
          component={NotificationStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Notification',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="bell-ring"
                color={color}
                size={size}
              />
            ),
          }}  />


{/* <Tab.Screen
          name="MyCartStack"
          component={MyCartStack}
          options={{
            headerShown: false,
            tabBarLabel: 'MyCart',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="cart"
                color={color}
                size={size}
              />
            ),
          }}  /> */}
        <Tab.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{
            headerShown: false,
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-cog"
                color={color}
                size={size}
              />
            ),
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
