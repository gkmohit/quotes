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
        this.state = {
            
        }
    }
    componentDidMount(){
        this.getDadJoke();
    }
    render() { 
        this.getDadJoke;
        const joke = this.prop.joke;
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

    getDadJoke = () => {
        this.props.setShowAnimation(true);
        console.log("Get Dad joke")
        this.setState({});
        axios({
          method:'get',
          url:'https://icanhazdadjoke.com/',
          headers: {
            'Accept': 'application/json'
          },
        }).then( (response) => {
            this.setState({
                joke: response.data.joke,
            });
            this.props.setShowAnimation(false);
          }).catch( (error) => {
            console.log(error);
            this.props.setShowAnimation(false);
          });
      };
    
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