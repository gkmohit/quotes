import React from 'react';
import axios from 'axios';
import { 
  StyleSheet, 
  TouchableOpacity,
  Text, 
  ActivityIndicator
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
    const joke =  <Joke joke={this.state.joke}/>
    const quote = <Quote quote={this.state.quote}/>
    const error = <Error />
    const showAnimation = this.state.showAnimation;
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
      <ActivityIndicator 
        size="large" 
        color="#0000ff" 
        animating={showAnimation}
        hideWhenStopped="true"/>
        {!showAnimation && displayItem}    
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
