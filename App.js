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
import Quote from './components/Quote.js';
import Joke from './components/Joke.js'


export default class App extends React.Component {

  constructor(props) { 
    super(props)
    this.state = {
      quote : {},
      showAnimation : true,
      joke: {}
    }
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() { 
    this.showComponent();
  }

  render() {

    

    return (
      <TouchableOpacity style={styles.container} onPress={this.showComponent}>
        <Joke 
          joke={this.state.joke}
          showAnimation={this.state.showAnimation}
        />
      </TouchableOpacity>
    );
  }

  showComponent = () => {
    this.getDadJoke();
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

  getDadJoke = () => {
    this.setState({
      showAnimation : true
    });
    axios({
      method:'get',
      url:'https://icanhazdadjoke.com/',
      headers: {
        'Accept': 'application/json'
      },
    }).then( (response) => {
        this.setState({
          joke: response.data.joke,
          showAnimation: false,
        });
        console.log(this.state.joke);
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
