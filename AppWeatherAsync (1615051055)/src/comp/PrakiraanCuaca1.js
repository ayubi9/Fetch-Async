import React from 'react';
import { StyleSheet, Text, View, AppRegistry,Button,TextInput } from 'react-native';

export default class Cuaca extends React.Component {

  constructor(props){
      super(props)
      this.state = {
        city:'',
        forecast:{
          main: '-',
          description: '-',
          temp: 0
        }
      };
    }

    getWeather= () =>{
    let url = 'http://api.openweathermap.org/data/2.5/weather?q='+this.state.city+ '&appid=901db352cef662051e116e86f137e4e5&units=metric';
    fetch (url)
    .then((response) => response.json())
    .then((responseJson) => {
      //console.log(responseJson);
      this.setState({
        forecast: {
          main: responseJson.weather[0].main,
          description: responseJson.weather[0].description,
          temp: responseJson.main.temp
        }
      });
    });
  }

    render() {
      return (
        <View style={styles.containerMain}>
          <View style={styles.box1}>
            <Text style={styles.text1}>Prakiraan Cuaa</Text>
          </View>
          <View style={styles.box2}>
              <TextInput style = {styles.text2}
                placeholder="Masukkan Nama Kota"
                onChangeText={(city)=>this.setState({city})}
              />

              <Button
              onPress={
                () => this.getWeather()
              }
              title="Lihat"
              color="#03A9F4"
              accessibilityLabel="Klik untuk melihat"
              />
          </View>
          <View style={styles.box3}>
            <Text style = {{padding: 10, fontSize: 20}} >
              Kota = {this.state.city} {"\n"}
              Cuaca = {this.state.forecast.main} {"\n"}
              Description = {this.state.forecast.description} {"\n"}
              Temp = {this.state.forecast.temp} {"'Celcius"}
            </Text>
          </View>
          <View style={styles.box5}>
            <Text style={styles.text1}>pemweb itu amazing (React-Native)</Text>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#34495E',
    flex: 1,
    flexDirection: 'column',
  },

  box1: {
    backgroundColor: '#0091EA',
    flex: 1,
    justifyContent: 'center'
  },

  box2: {
    backgroundColor: '#E1F5FE',
    flex: 2,
    justifyContent: 'center'
  },

  box3: {
    backgroundColor: '#81D4FA',
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around',
    // alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box4: {
    backgroundColor: '#52B3D9',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },

  box5: {
    backgroundColor: '#B3E5FC',
    flex: 1,
    margin: 10
  },

  box6: {
    width: 50,
     height: 50,
     backgroundColor: '#E4F1FE',
     justifyContent: 'center',
     alignItems: 'center',
  },

  box7: {
    backgroundColor: '#52B3D9',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },

  text: {
    padding: 30, fontSize: 20, color: 'white', textAlign: 'center'
  },

  text1: {
    padding: 30, fontSize: 20, color: 'black', textAlign: 'center', fontWeight:'bold'
  },
  text2: {
    padding: 30, fontSize: 20, color: 'blue', textAlign: 'center', fontWeight:'bold'
  }

});
