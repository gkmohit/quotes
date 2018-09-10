import React from 'react';
import axios from 'axios';
import { 
  StyleSheet, 
  TouchableOpacity,
  Text
 } from 'react-native';
import Quote from './components/Quote.js';
import Joke from './components/Joke.js'
 
export default class App extends React.Component {

  constructor(props) { 
    super(props)
    this.state = {
      showAnimation: true,
      isJoke: false,
      isQuote: false,
      joke:{},
      quote:{},
    }
    
  }

  componentDidMount(){
    this.setComponent();
  }

  render() {
    const joke =  <Joke setShowAnimation={this.setShowAnimation} joke={this.state.joke}/>
    const quote = <Quote setShowAnimation={this.setShowAnimation} quote={this.state.quote}/>
    this.setComponent;
    let displayItem;
    if( this.state.isJoke){
      displayItem = joke;
    } else if( this.state.isQuote){
      displayItem = quote;
    }
    return(
      <TouchableOpacity style={styles.container} onPress={this.setComponent}>
        {displayItem}    
      </TouchableOpacity>
    )
  }

  setShowAnimation = (showAnimationValue) => {
    this.setState({
      showAnimation: showAnimationValue
    });
  }

  setComponent = () => {
    this.setState({
      isJoke: false,
      isQuote: false
    })
    this.decider();
  }

  decider = () => {
    const min = 1;
    const max = 100;
    const rand = min + Math.floor(Math.random() * (max - min));
    console.log(rand);
    
    if( rand % 2 === 0){
      this.getQuote();
      this.setState({
        isQuote: true,
        isJoke: false
      });
    } else {
      this.getDadJoke();
      this.setState({
        isQuote: false,
        isJoke: true
      });
    }
  }

  getQuote = () => {
    
    console.log("Get Quote")
    axios({
        method:'get',
        url:'https://favqs.com/api/qotd',
    }).then( (response) => {
      const quote = {
        quote: response.data.quote.body,
        author: response.data.quote.author,
      }
      this.setState({
         quote 
      });
    }).catch( (error) => {
        console.log(error);
    });
  };

  getDadJoke = () => {
    axios({
      method:'get',
      url:'https://icanhazdadjoke.com/',
      headers: {
        'Accept': 'application/json'
      },
    }).then( (response) => {
        const joke = {
            joke: response.data.joke,
        }
        this.setState({
            joke
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
