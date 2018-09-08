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
        const joke = this.props.joke;
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
                    animating={showAnimation}
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
    joke : PropTypes.string ,
    showAnimation : PropTypes.boolean
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

//   <Joke 
//           joke={this.state.joke}
//           showAnimation={this.state.showAnimation}
//         />