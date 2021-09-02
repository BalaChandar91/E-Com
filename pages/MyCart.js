// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import { View, Text, SafeAreaView ,Image} from 'react-native';

const MyCart = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>


          <Image
            style={{
              width: 200, height: 200, justifyContent: 'center',
            }}
            source={require("../assets/empty.png")}
          />

          {/* <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
            MyCart Screen
          </Text> */}
        </View>


      </View>
    </SafeAreaView>
  );
}
export default MyCart;