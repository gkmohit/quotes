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
      quote : {
        
      },
      joke: {
        
      },
    }
    
  }

  componentDidMount() { 
    this.setComponent();
  }

  render() {
    
    if( this.state.joke.isJoke) {
      return (
        <TouchableOpacity style={styles.container} onPress={this.setComponent}>
          <Joke 
            joke={this.state.joke.body}
            showAnimation={this.state.showAnimation}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity style={styles.container} onPress={this.setComponent}>
          <Quote 
            quote={this.state.quote.body}
            author={this.state.quote.author}
            showAnimation={this.state.showAnimation}
          />
        </TouchableOpacity>
      )
    }
    //3. set state
    //4. display component
    
  }

  setComponent = () => {
    this.decider();
    if( this.state.joke.isJoke) {
      console.log("Setting component to Quote");
      this.getQuote;
      
    } else {
      console.log("Setting component to Joke");
      this.getDadJoke;
      
    }
  }


  //1. decide on joke or quote
  decider = () => {
    const min = 1;
    const max = 100;
    const rand = min + Math.random() * (max - min);
    const joke = {...this.state.joke};
    const quote = {...this.state.quote};
    console.log(rand);
    if( rand % 2 === 0){
      this.setState({
        quote:{isQuote:false}, 
        joke:{isJoke:true}
      });
      console.log("Is Quote :" + this.state.quote.isQuote);
    } else {
      this.setState({
        quote:{isQuote:true}, 
        joke:{isJoke:false}
      });
      console.log("Is Joke : " + this.state.joke.isJoke);
    }
  }

  // showComponent = () => {
    
  //   // this.getDadJoke();
  //   this.getQuote();
  // }
  
  getQuote = () => {
    this.setState({
      showAnimation : true
    });
    axios({
      method:'get',
      url:'https://favqs.com/api/qotd',
    }).then( (response) => {
        console.log("State updated with Quote");
        
        this.setState({
          quote : {
            body: response.data.quote,
            author: response.data.quote.author,
          },
          showAnimation : false,
          joke: {},
        });

        console.log(this.state.quote);
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
      console.log("State updated with Joke");
        this.setState({
          joke: {
            body: response.data.joke,
          },
          showAnimation: false,
          quote: {}
        });
      }).catch( (error) => {
        console.log(error);
      });

      console.log(this.state.joke);
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
