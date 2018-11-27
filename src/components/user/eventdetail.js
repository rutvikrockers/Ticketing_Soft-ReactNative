import React, {Component} from 'react';
import {Text, ScrollView, TouchableHighlight, View, Image, AsyncStorage, FlatList, StyleSheet,Animated,Button} from 'react-native';
import {connect} from 'react-redux';
import stylesMain from '../../styles/main';
import {fetchListEvents} from '../../actions/eventdetails';
import colors from '../../styles/colors';
import {Link, Redirect} from 'react-router-native';
type Props = {};


class Progressbar extends Component{
componentWillMount(){
   
  this.animation = new Animated.Value
  (this.props.progress);
}
componentDidUpdate(prevProps, prevState){
  if(prevProps.progress != this.props.progress){
      Animated.timing(this.animation,{
        toValue: this.props.progress,
        duration:this.props.duration
      }).start();
  }
}
  render(){
    const{
      height,
      borderColor,
      borderRadius,
      borderWidth,
      barColor,
      fillColor
    } =this.props;

const  widthInterpolated = this.animation.interpolate({
  inputRange: [0,1],
  outputRange:["0%","100%"],
  extrapolate:"clamp"
})

    return(
      <View style={{
      flex:1,  flexDirection: "row",height
      }}>
<View style = {{
  flex:1 , borderColor,borderWidth,borderRadius
}}>
<View style={[StyleSheet.absoluteFill,{backgroundColor: fillColor}]}
/>
  <Animated.View
    style ={{
      position: "absolute",
      left:0,
      top:0,
      bottom:0,
      width:widthInterpolated,
      backgroundColor:barColor
    }}
  />
</View>
      </View>
    )
    
  }
}
Progressbar.defaultProps = {
    height:15,
   borderColor: "rgb(142,142,142)",
   borderWidth: 2,
   borderRadius: 4,
   barColor: 'rgba(98, 156, 18,1.0)',
   fillColor: '#fff',
  
}

class EventDetail extends Component<Props> {

  componentWillMount() {
    this.props.dispatch(fetchEvents(this.props.user.msg));
   }
   state ={
     progress: 0.5,
   }
    componentWillMount() {
   ///     alert(this.props.event.user_id);
       // this.props.dispatch(fetchListEvents(this.props.event.user_id,this.props.event.eventId));
       }
    render() {
      
        return (
    
            <View style={styles.container} >
                <Text style={styles.h2text}>
                Event Info
                </Text>
                <View style={stylesMain.verticalGroup}>
<Text style={styles.name}>{"test 21 Nov"}</Text>
      
    <Text style={styles.overView}>{"On "+ "Nov 20 2018 12:00 AM"}</Text>
     <Text style={styles.overView}>{"From " +"2018-11-20"+ " To "+ "2018-12-31"}  </Text>
     <View style={stylesMain.horizontalGroup}>

<View style={stylesMain.verticalGroup}>
     <Text style={styles.name}>{"Tickets Sold"}</Text>
     <Text style={styles.overView}>{"3" + "/" +"100"}</Text>
     </View>
</View>
     <View style= {styles.progressContainer}>
       <Progressbar
       progress = {this.state.progress}
       />

      
     </View>
     
     <View style={stylesMain.horizontalGroup}>

<View style={stylesMain.verticalGroup}>
     <Text style={styles.name}>{"Attendance"}</Text>
     <Text style={styles.overView}>{"0" + "/" +"3"}</Text>
     </View>
</View>
     <View style= {styles.progressContainer}>
       <Progressbar
       progress = {this.state.progress}
       />

      
     </View>
     
     
</View>

         
{/* <View style={stylesMain.verticalGroup}>

<Text style={styles.name}>{item.event_title}</Text>
  <Text style={styles.overView}>{"On "+ item.event_start_date_time }</Text>
  <Text style={styles.overView}>{"From "+ item.event_start_date_time + "To" + item.event_end_date_time }</Text>           


 

</View> */}
<View style={styles.btnContainer}/>
<Button  style = {styles.button}onPress={() =>  <Link to="/eventdetail"/>}
          title="CheckIn"/>
            </View>
            
        );
      }
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginTop: 10,
            backgroundColor: '#fff',
            },
            h2text: {
              marginLeft:20,
            marginTop: 10,
            fontFamily: 'Helvetica',
            fontSize: 36,
            fontWeight: 'bold',
            },
            flatview: {
            justifyContent: 'center',
            paddingTop: 30,
            marginLeft:10,
            borderRadius: 2
            },
            name: {

            fontFamily: 'Verdana',
            fontWeight: 'bold',
            fontSize: 18,
            marginLeft:20
            },
            overView: {
            fontFamily: 'Verdana',
            fontSize: 14,
            marginTop:10,
            marginLeft:20
           
            },
            htmlText: {
            width : 250,
            height: 100 
            },
            overviewtext: {
            color: 'black',
            marginLeft:10,
            marginTop: 10
            },
            avatar: {
              width:90,
              height: 90,
              borderRadius:90
            },
            progressContainer: {
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft:20,
              
              marginRight:20,
             marginTop:10
            },
            btnContainer: {
              flex: 1,
              
              justifyContent: 'flex-end',
              marginBottom: 0,
             
            },
            button: {
              backgroundColor:'#1E6738',   
           },
      });
    export const mapStateToProps = (state) => {
        return {
          user: state.user,
          event: state.event.all_events,
        }
      }
    export default connect(mapStateToProps)(EventDetail);

