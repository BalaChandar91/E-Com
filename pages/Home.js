// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,Image,ImageBackground
} from 'react-native';

import { FlatGrid } from 'react-native-super-grid';

const Home = ({ navigation }) => {


  const [items, setItems] = React.useState([
    { name: 'VEGETABLES', image:require("../assets/pic1.jpg")},
    { name: 'FROZEN FOOD', image:require("../assets/pic3.jpg")},
    { name: 'VEGGIES', image:require("../assets/pic2.jpg")},
    { name: 'KOOPE', image:require("../assets/pic4.jpg")},
    { name: 'GLUTEN TREE', image:require("../assets/pic5.png")},
    { name: 'HACKVEST',image:require("../assets/pic1.jpg")},
    { name: 'VEGON' ,image:require("../assets/pic3.jpg")},
    { name: 'CAREGIVER',image:require("../assets/pic5.png")},
    { name: 'VITEM',image:require("../assets/pic4.jpg")},
    { name: 'MIDNIGHT BLUE', image:require("../assets/pic2.jpg")},
    { name: 'SUN FLOWER', image:require("../assets/pic5.png")},
    { name: 'CARROT', image:require("../assets/pic3.jpg")},
    { name: 'ALIZARIN', image:require("../assets/pic1.jpg")},
    { name: 'CLOUDS CHIPS', image:require("../assets/pic2.jpg")},
    { name: 'CONCRETE', image:require("../assets/pic5.png")},
    { name: 'ORANGE',image:require("../assets/pic1.jpg")},
    { name: 'PUMPKIN', image:require("../assets/pic3.jpg")},
    { name: 'POMEGRANATE', image:require("../assets/pic4.jpg")},
    { name: 'SILVER FOOD', image:require("../assets/pic2.jpg")},
    { name: 'ASBESTOS', image:require("../assets/pic1.jpg")},
  ]);



    return (
      <SafeAreaView style={{ flex: 1 }}>


<FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300} 
      // fixed
      spacing={2}
      renderItem={({ item }) => (
        <View style={[styles.itemContainer, { }]}>

<ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={item.image}>


          <Text style={styles.itemName }>{item.name}</Text>
          
          </ImageBackground>
        </View>
        
      )}
    />
      </SafeAreaView>
    );
  }




  
  
  const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
      },
      itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
      },
      itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        position: 'absolute',
        right: 5,
        bottom:0,
       
        
      },
      itemCode: {
        fontWeight: 'normal',
        fontSize: 12,
        color: '#fff',
      },
      imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1 
},
    });
  export default Home;