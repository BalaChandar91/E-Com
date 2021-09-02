import React, { Component } from 'react';
import { View, Text, SafeAreaView ,Image,StyleSheet,ImageBackground,TouchableOpacity} from 'react-native';
 import { SliderBox } from 'react-native-image-slider-box';
 import { FlatGrid } from 'react-native-super-grid';
const Offer = () => {



        
        this.state = {
          images: [
            require('../assets/offer5.jpg'),
            require('../assets/offer6.jpg'),
            require('../assets/offer7.jpg'),
            require('../assets/pic1.jpg'),
            require('../assets/pic2.jpg'),
          ]
        };
      
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
      <View style={styles.container}>

      <SliderBox
  images={this.state.images}
  sliderBoxHeight={200}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor="#FFEE58"
  inactiveDotColor="#90A4AE"
  paginationBoxVerticalPadding={20}
  autoplay
  circleLoop
/>

<FlatGrid
      itemDimension={100}
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


      </View>
    </SafeAreaView>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1
  },
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
export default Offer;