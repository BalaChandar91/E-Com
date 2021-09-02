import React,{ Component} from 'react';
import {View, Text, StyleSheet, Button, Image, Alert, TouchableOpacity , AppState} from 'react-native';
import Video from 'react-native-video';
import Slider from 'react-native-slider'




/*
https://github.com/abbasfreestyle/react-native-af-video-player
*/

const url =  require('../assets/video.mp4');

class Media extends Component {
   
  constructor(props) {
    super(props);
    this.state = { 
      appState: AppState.currentState,
      currentTime: null,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      screenType:'content'
    }; 
  }
 


  onPause(){
    this.setState({
      paused: !this.state.paused
    })
  }


  onProgress = data => {
    console.log(data)
    if (!this.state.paused) 
      this.setState({ currentTime: data.currentTime});
     
  };

  onLoad = data => {
    console.log(this.msToTime(data.duration))
   
    this.setState({ duration: data.duration, isLoading: false })
  };
  onEnd = () => this.setState({ paused: true });


  seek(time) {
    time = Math.round(time);
    this.refs.audioElement && this.refs.audioElement.seek(time);
    this.setState({
      currentPosition: time, 
    });
  }

  


  msToTime(time) {
        // Hours, minutes and seconds
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;
    
        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "";
    
        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }
    
        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
  }
  

  onSeeking(value){
    console.log(Math.round(value))
    this.seek(Math.round(value));
  }
  

  render() { 


    const video = (
                    <Video source={{uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1'}}        // Can be a URL or a local file.
                      ref="audioElement"              // Pauses playback entirely.
                      onLoad={this.onLoad}            // Callback when video loads
                      onProgress={this.onProgress}    // Callback every ~250ms with currentTime
                      paused={this.state.paused}
                      onEnd={this.onEnd}
                       /> 
                  );


 


    
    return ( 
      <View style={styles.container}>  

      <View style={styles.imgContainer}>

      </View>
 
   
    
        {video}


        <Slider
          value={this.state.currentTime}
          minimumValue={0}
          maximumValue={this.state.duration}
          onSlidingComplete={value =>  this.onSeeking(value)}
          trackStyle={styles.trackStyle}
          thumbStyle={styles.thumbStyle}
          minimumTrackTintColor='#333'

        />
        <View style={styles.timeDurationContainer}>
          <Text>{this.msToTime(this.state.currentTime)}</Text>
          <Text>{ this.msToTime(this.state.duration)}</Text>
        </View>

        <View style={styles.bContainer}>
          <TouchableOpacity style={styles.btnContainer} onPress={this.onPause.bind(this)}>
            {!this.state.paused ? (
                    <Image
                    style={{width: 40, height: 40}}
                    source={require('../assets/s.png')}
                  />
            ) : (
              <Image
              style={{width: 40, height: 40}}
              source={require('../assets/p.png')}
            />
            )}
          </TouchableOpacity>
        </View>
     

    
      </View>
     );
  }
}

const styles = StyleSheet.create({
  container:{ 
  flex: 1,
  backgroundColor: '#555',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    
  },
  imgContainer:{
    backgroundColor:'#666',
    flex:2,


  },
  bContainer:{
    alignItems:'center'
  },

  btnContainer:{ 
    padding: 10,
    margin: 10,
    width:100,
    height:100,
    borderRadius: 100,
    justifyContent:'center',
    alignItems: 'center', 
    borderWidth: 5,
    borderColor: '#ffffff',


  },
  progressContainer:{
    width:'100%',
    height: 2,
    backgroundColor:'#fff'
  },
  timeDurationContainer:{ 
    flexDirection: 'row',
    backgroundColor: '#999999',
    justifyContent:'space-between',
    padding:10,


  },
  trackStyle:{
    backgroundColor:'#666',
  },
  thumbStyle:{
    backgroundColor:'#d63031',

  }


});

 
export default Media;



// import React from 'react';
// import { View, Image ,StyleSheet,Text} from 'react-native';
// import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';


// export default class Media extends React.Component {





//   /**
//    * Log out an example event after zooming
//    *
//    * @param event
//    * @param gestureState
//    * @param zoomableViewEventObject
//    */
//   logOutZoomState = (event, gestureState, zoomableViewEventObject) => {
//     console.log('');
//     console.log('');
//     console.log('-------------');
//     console.log('Event: ', event);
//     console.log('GestureState: ', gestureState);
//     console.log('ZoomableEventObject: ', zoomableViewEventObject);
//     console.log('');
//     console.log(`Zoomed from ${zoomableViewEventObject.lastZoomLevel} to  ${zoomableViewEventObject.zoomLevel}`);
//   }

  

//   render() {
//     return (


//       // <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
//       // <Text>My video project!</Text>
//       // <View>
//       // <Video
//       // source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}
//       // style={{ width: 300, height: 300 }}
//       // controls={true}
//       // onBuffer={this.videoBuffer}
//       // ref={(ref) => {
//       // this.player = ref
//       // }} />
//       // </View>
//       // </View>



      






//       <View style={{ flex: 1 }}>

        



//         <ReactNativeZoomableView
//           maxZoom={1.5}
//           minZoom={0.5}
//           zoomStep={0.5}
//           initialZoom={1}
//           bindToBorders={true}
//           onZoomAfter={this.logOutZoomState}
//           style={{
//             padding: 8,
          
//           }}
//         >
//           <Image style={{ flex: 1, width: null, height: '100%' }}
//                  source={require('../assets/offer6.jpg')}
//                  resizeMode="contain" />
//         </ReactNativeZoomableView>
        
      

//         < View style={{ width: 100, height: 20 }} >
//   <Image
//     style={{width: 25, height: 25, marginTop: 20,marginLeft:350}}
//     source={require("../assets/ic_person.png")}
//   />
// </View>

//         <Text style={styles.pageTitle1}> Grocery Offer 70!</Text>


//         <View style = {styles.lineStyle} />

      

//         <ReactNativeZoomableView
//           maxZoom={1.5}
//           minZoom={0.5}
//           zoomStep={0.5}
//           initialZoom={1}
//           bindToBorders={true}
//           onZoomAfter={this.logOutZoomState}
//           style={{
//             padding: 8,
          
//           }}
//         >
//           <Image style={{ flex: 1, width: null, height: '100%' }}
//                  source={require('../assets/pic4.jpg')}
//                  resizeMode="contain" />
//         </ReactNativeZoomableView>


//         < View style={{ width: 100, height: 20 }} >
//   <Image
//     style={{width: 25, height: 25, marginTop: 20,marginLeft:350}}
//     source={require("../assets/ic_person1.png")}
//   />
// </View>


//               <Text style={styles.pageTitle1}> Customer Service!</Text>
 

      


//         <View style = {styles.lineStyle} />
//       </View>
//     );
//   }
// }



// const styles = StyleSheet.create({
//     pageContainer: {
//         marginTop: 15,
//         marginBottom: 15,
//         alignItems: 'center',
//         flex: 1,
//     },
//     pageTitle: {
//         fontSize: 24,
//         marginTop: 10,
//         fontWeight: '600',
//         color: 'black',
//         marginBottom: 20,
//     },
//     pageTitle1: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         color: '#42f44b',
//     },
//     textInput: {
//         height: 40,
//         width: 200,
//         marginTop: 10,
//         borderColor: 'gray',
//         borderWidth: 1
//     },
//     urlInput: {
//         height: 40,
//         width: 300,
//         marginTop: 10,
//         borderColor: 'gray',
//         borderWidth: 1
//     },
//     button: {
//         height: 46,
//         marginTop: 60,
//         width: 220,
//         alignItems: 'center',
//         backgroundColor: '#FFA500',
//         borderRadius: 15,
//     },
//     buttonText: {
//         textAlign: 'center',
//         padding: 10,
//         fontSize: 14,
//         color: 'white',
//         fontWeight: 'bold'
//     },
//     container: {
//         flex: 1,
//         justifyContent: "space-around",
//         alignItems: "center",


//     },
//     lineStyle:{
//         borderWidth: 0.5,
//         borderColor:'black',
//         margin:10,
//    },
// });

