import React from 'react';
import Title from './Title';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text,
  View,
  ActivityIndicator
} from 'react-native';

const JOKE_TITLE = "Joke";
const FONT_AWESOME_ICON = "glass";
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
            <View style={styles.container}>
                <Title title={JOKE_TITLE} fontAwesomeIcon={FONT_AWESOME_ICON} />
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
    showAnimation : PropTypes.func,
    joke: PropTypes.string
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5
    },
  });