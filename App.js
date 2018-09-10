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
      isQuote: false
    }
    
  }

  componentDidMount(){
    this.setComponent();
  }

  render() {
    const joke =      <Joke setShowAnimation={this.setShowAnimation} />
    const quote = <Quote setShowAnimation={this.setShowAnimation} />
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

  //1. decide on joke or quote
  decider = () => {
    const min = 1;
    const max = 100;
    const rand = min + Math.floor(Math.random() * (max - min));
    console.log(rand);
    if( rand % 2 === 0){
      this.setState({
        isQuote: true,
        isJoke: false
      });
    } else {
      this.setState({
        isQuote: false,
        isJoke: true
      });
    }
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
