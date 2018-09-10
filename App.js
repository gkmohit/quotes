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
      isError: false,
      joke:{},
      quote:{},
    }
    
  }

  componentDidMount(){
    this.setComponent();
  }

  render() {
    console.log(this.state.showAnimation);
    const joke =  <Joke showAnimation={this.showAnimation} joke={this.state.joke}/>
    const quote = <Quote showAnimation={this.showAnimation} quote={this.state.quote}/>
    const error = <Error />
    let displayItem;
    if( this.state.isJoke){
      displayItem = joke;
    } else if( this.state.isQuote){
      displayItem = quote;
    } else if( this.state.isError){
      displayItem = error;
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
    
    this.setShowAnimation(true);
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
      this.setShowAnimation(false);
    }).catch( (error) => {
        this.setState({
          isError: true, 
          isQuote: false,
          isJoke: false,
        })
        this.setShowAnimation(false);
    });
  };

  getDadJoke = () => {
    this.setShowAnimation(true);
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
        this.setShowAnimation(false);
      }).catch( (error) => {
        this.setState({
          isError: true, 
          isQuote: false,
          isJoke: false,
        })
        this.setShowAnimation(false);
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
