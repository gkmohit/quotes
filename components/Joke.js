import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text,
  View,
  ActivityIndicator
} from 'react-native';

export default class Joke extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() { 
        
        const joke = this.props.joke.joke;
        const jokeTextStyle = {
            color: "#FFF",
            fontSize: 35,
            textAlign: "center",
        };
        return (
            <View style={styles.contaier}>

                <Text
                    accessibilityLabel={joke}
                    style= {jokeTextStyle} >
                    {joke}
                </Text>
            </View>
        )
    }


    
}

Joke.prop = {
    showAnimation : PropTypes.func
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5
    },
  });