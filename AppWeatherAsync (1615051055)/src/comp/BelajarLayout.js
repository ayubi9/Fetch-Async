import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
  render() {
    return (
    <View style={style.containerMain}>
      <View style={style.box1}>
      <Text style={style.text}>1</Text>
      </View>
      <View style={style.box1}>
      <Text style={style.text}>2</Text>
      </View>
      <View style={style.box1}>
      <Text style={style.text}>3</Text>
      </View>
    );
  }
}
