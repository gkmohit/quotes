import React from 'react';
import axios from 'axios';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  Button, 
  Vibration,
  ActivityIndicator
} from 'react-native';
import Quote from './components/Quote.js'


export default class App extends React.Component {

  constructor(props) { 
    super(props)
    this.state = {
      quote : {},
      showAnimation : true
    }
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() { 
    this.getQuote();
  }

  render() {

    const quote = this.state.quote.body;
    const showAnimation = this.state.showAnimation;
    const quoteTextStyle = {
      color: "#000000",
      fontSize: 35,
      textAlign: "center",
    };

    const authorTextStyle = {
      color: "#000000",
      fontSize: 25,
      textAlign: "left"
    }

    return (
      <TouchableOpacity style={styles.container} onPress={this.getQuote}>
        <ActivityIndicator 
          size="large" 
          color="#0000ff" 
          animating={this.state.showAnimation}
          hideWhenStopped="true"/>
        { !showAnimation && <Text
         accessibilityLabel={this.state.quote.body}
         style= {quoteTextStyle}
        >
          "{quote}"
        </Text>}
        { !showAnimation && <Text
          accessibilityLabel={this.state.quote.body}
          style= {authorTextStyle}
        >
          - {this.state.quote.author}
        </Text>}
        <Quote />
      </TouchableOpacity>
    );
  }

  
  getQuote = () => {
    this.setState({
      showAnimation : true
    });
    axios({
      method:'get',
      url:'https://favqs.com/api/qotd',
    }).then( (response) => {
        this.setState({
          quote : response.data.quote ,
          showAnimation : false
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
