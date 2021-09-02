// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import React, { useState, useEffect } from 'react';
import { FlatList, Text, View, SafeAreaView,Image } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';

var db = openDatabase({ name: 'UserDatabase.db' });

const Notification = () => {


    let [flatListItems, setFlatListItems] = useState([]);

    useEffect(() => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM table_user',
          [],
          (tx, results) => {
            console.log('NotifyResults',results);
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setFlatListItems(temp);
          }
        );
      });
    }, []);
  
    let listViewItemSeparator = () => {
      return (
        <View
          style={{
            height: 0.2,
            width: '100%',
            backgroundColor: '#808080'
          }}
        />
      );
    };
  
    let listItemView = (item) => {
      return (
        <View
          key={item.user_id}
          style={{ backgroundColor: 'white', padding: 10 }}>
          {/* <Text>Title: {item.title}</Text>
          <Text>Message: {item.message}</Text> */}

          <Text style={{
              fontSize: 15,
              textAlign: 'left',
              fontWeight: 'bold'
            }}>{item.title}</Text>
          <Text  style={{
              fontSize: 12,
            }}> {item.message}</Text>
        </View>
      );
    };    



  return (
    <SafeAreaView style={{ flex: 1 }}>

<View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={flatListItems}
            ItemSeparatorComponent={listViewItemSeparator}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => listItemView(item)}
          />
        </View>
    
  
      </View>
      {/* <View style={{ flex: 1, padding: 16 }}>
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

        
        </View>


      </View> */}
    </SafeAreaView>
  );
}
export default Notification;