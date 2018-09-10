import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text,
  View,
  ActivityIndicator
} from 'react-native';

export default class Quote extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(){
        this.getQuote();
    }
    render() { 
        const quote = this.state.quote;
        const author = this.state.author;
        const showAnimation = this.props.showAnimation;
        const quoteTextStyle = {
            color: "#000000",
            fontSize: 35,
            textAlign: "center",
        };

        const authorTextStyle = {
            color: "#000000",
            fontSize: 25,
            textAlign: "center"
        }
        return (
            <View style={styles.contaier}>
                <ActivityIndicator 
                    size="large" 
                    color="#0000ff" 
                    animating={false}
                    hideWhenStopped="true"/>
                { !showAnimation && <Text
                    accessibilityLabel={quote}
                    style= {quoteTextStyle} >
                    "{quote}"
                </Text> }
                { !showAnimation && <Text
                    accessibilityLabel={author}
                    style= {authorTextStyle} >
                    - {author}
                </Text>}
            </View>
        )
    }

    getQuote = () => {
        this.props.setShowAnimation(true);
        axios({
            method:'get',
            url:'https://favqs.com/api/qotd',
        }).then( (response) => {
            console.log("State updated with Quote");
            console.log(response)
            this.setState({
                quote: response.data.quote.body,
                author: response.data.quote.author,
            });

            console.log(this.state.quote);
        }).catch( (error) => {
        console.log(error);
        });
    };
}

Quote.prop = {
    setShowAnimation : PropTypes.func
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5
    },
  });

//   <Quote 
//           quote={this.state.quote.body}
//           author={this.state.quote.author}
//           showAnimation={this.state.showAnimation}
//         />