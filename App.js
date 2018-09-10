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

  componentDidMount() { 
    // this.setComponent();
  }

  render() {
    // return (
    //     <TouchableOpacity style={styles.container} onPress={this.setComponent}>
    //       <Joke 
    //         setShowAnimation={this.setShowAnimation}
    //       />
    //     </TouchableOpacity>
    // );
    return (
      <TouchableOpacity style={styles.container} onPress={this.setComponent}>
          <Quote 
          setShowAnimation={this.setShowAnimation}
          />
        </TouchableOpacity>
    )

    // if( this.state.joke.isJoke) {
    //   return (
    //     <TouchableOpacity style={styles.container} onPress={this.setComponent}>
    //       <Joke 
    //         joke={this.state.joke.body}
    //         showAnimation={this.state.showAnimation}
    //       />
    //     </TouchableOpacity>
    //   );
    // } else {
    //   return (
    //     <TouchableOpacity style={styles.container} onPress={this.setComponent}>
    //       <Quote 
    //         quote={this.state.quote.body}
    //         author={this.state.quote.author}
    //         showAnimation={this.state.showAnimation}
    //       />
    //     </TouchableOpacity>
    //   )
    // }
    //3. set state
    //4. display component
    
  }

  setShowAnimation = (showAnimationValue) => {
    this.setState({
      showAnimation: showAnimationValue
    });
  }

  setComponent = () => {
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
      console.log("State :" + this.state);
    } else {
      this.setState({
        isQuote: false,
        isJoke: true
      });
      console.log("State :" + this.state);
    }
  }

  // showComponent = () => {
    
  //   // this.getDadJoke();
  //   this.getQuote();
  // }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
