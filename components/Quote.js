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
    render() { 
        const quote = this.props.quote;
        const showAnimation = this.props.showAnimation;
        const author = this.props.author;
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
                    animating={showAnimation}
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
}

Quote.prop = {
    quote : PropTypes.string.isRequired ,
    author : PropTypes.string.isRequired , 
    showAnimation : PropTypes.boolean 
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