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
        this.getDadJoke;
        console.log(this.props);
        const joke = this.props.joke.joke;
        const showAnimation = this.props.showAnimation;
        const jokeTextStyle = {
            color: "#000000",
            fontSize: 35,
            textAlign: "center",
        };
        return (
            <View style={styles.contaier}>
                <ActivityIndicator 
                    size="large" 
                    color="#0000ff" 
                    animating={false}
                    hideWhenStopped="true"/>
                { !showAnimation && <Text
                    accessibilityLabel={joke}
                    style= {jokeTextStyle} >
                    {joke}
                </Text> }
            </View>
        )
    }


    
}

Joke.prop = {
    setShowAnimation : PropTypes.func
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