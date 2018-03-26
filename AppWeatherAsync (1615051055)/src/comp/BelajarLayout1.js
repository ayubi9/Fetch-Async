import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}>ini header </Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>ini slider</Text>
        </View>
        <View style={styles.box3}>
        <View style={styles.box5}>
          <View style={{width: 50, height: 50, backgroundColor: '#FCE4EC'}} />
          <View style={{width: 50, height: 50, backgroundColor: '#FCE4EC'}} />
          <View style={{width: 50, height: 50, backgroundColor: '#FCE4EC'}} />
          <View style={{width: 50, height: 50, backgroundColor: '#FCE4EC'}} />
          </View>
          <View style={styles.box7}>
            <View style={{width: 50, height: 50, backgroundColor: '#FCE4EC'}} />
            <View style={{width: 50, height: 50, backgroundColor: '#FCE4EC'}} />
            <View style={{width: 50, height: 50, backgroundColor: '#FCE4EC'}} />
            <View style={{width: 50, height: 50, backgroundColor: '#FCE4EC'}} />
            </View>
        </View>
        <View style={styles.box4}>
        <View style={styles.box6}>
          <Text style={styles.text}>syalalala</Text>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: 'blue',
    flex: 1,
    flexDirection: 'column'
  },
  box1: {
    flex: 1,
    backgroundColor: '#E91E63',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box2:{
    flex: 3,
    backgroundColor: '#F8BBD0',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  box3: {
    flex: 3,
    backgroundColor: '#F48FB1',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  box4: {
    flex: 1,
    backgroundColor: '#C2185B',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  box5: {
    flex:1,
    backgroundColor: '#F06292',
    flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop:10,
    width:320,
    height:100,
  },
  box6: {
    backgroundColor: '#EC407A',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:320,
    height:50,
  },
  box7: {
    flex:1,
    backgroundColor: '#F06292',
      flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width:320,
    height:100,
    marginBottom:10
  },
  text: {
    fontSize: 25
  },
});
