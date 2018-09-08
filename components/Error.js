import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text,
  View,
  ActivityIndicator
} from 'react-native';

export default class Error extends React.Component {

    constructor(props) {
        super(props);
    }
    render() { 
        const error = "Opps there was an error!";
        const errorTextStyle = {
            color: "#000000",
            fontSize: 35,
            textAlign: "center",
        };
        return (
            <View style={styles.contaier}>
                <Text
                    accessibilityLabel={error}
                    style= {errorTextStyle} >
                    {error}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
Error.propTypes = {
    error : PropTypes.object,
}
