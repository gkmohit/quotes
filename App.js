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

    

    return (
      <TouchableOpacity style={styles.container} onPress={this.getQuote}>
        <Quote 
          quote={this.state.quote.body}
          author={this.state.quote.author}
          showAnimation={this.state.showAnimation}
        />
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
