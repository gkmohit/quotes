import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Button, Vibration } from 'react-native';
import axios from 'axios';


export default class App extends React.Component {

  constructor(props) { 
    super(props)
    this.state = {
      quote : {}
    }
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() { 
    this.getQuote;
  }

  render() {

    const quoteTextStyle = {
      color: "#000000",
      fontSize: 35,
      textAlign: "center"
    };

    const authorTextStyle = {
      color: "#000000",
      fontSize: 25,
      textAlign: "left"
    }

    return (
      <TouchableOpacity style={styles.container} onPress={this.getQuote}>
        <Text
         accessibilityLabel={this.state.quote.body}
         style= {quoteTextStyle}
        >
          "{this.state.quote.body}"
        </Text>
        <Text
          accessibilityLabel={this.state.quote.body}
          style= {authorTextStyle}
        >
          - {this.state.quote.author}
        </Text>

        <Button
          onPress={this.getQuote}
          title="Get new Quote"
          color="#4CAF50"
          accessibilityLabel="Get new Quote"
        ></Button>
      </TouchableOpacity>
    );
  }

  
  getQuote = () => {
    axios({
      method:'get',
      url:'https://favqs.com/api/qotd',
    }).then( (response) => {
        this.setState({
          quote : response.data.quote 
        });
      }).catch( (error) => {
        console.log(error);
      });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
