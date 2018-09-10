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
    }

    componentWillReceiveProps(){
        this.setState({ })
    }

    render() { 
        
        const quote = this.props.quote.quote;
        const author = this.props.quote.author;
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
                <Text
                    accessibilityLabel={quote}
                    style= {quoteTextStyle} >
                    "{quote}"
                </Text>
                <Text
                    accessibilityLabel={author}
                    style= {authorTextStyle} >
                    - {author}
                </Text>
            </View>
        )
    }

    
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