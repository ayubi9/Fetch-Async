import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>PERKIRAAN CUACA</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#E91E63',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingTop: 10,
      position: 'relative',

    },
    textStyle: {
      fontSize: 25,
      color: '#fff',
      textAlign: 'center'
    }
}
export default Header;
