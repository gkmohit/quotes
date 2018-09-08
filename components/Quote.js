import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  Text,
  View
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
                <Text
                accessibilityLabel={quote}
                style= {quoteTextStyle}
                >
                "{quote}"
                </Text> 
                <Text
                accessibilityLabel={author}
                style= {authorTextStyle}
                >
                - {author}
                </Text>
            </View>
        )
    }
}

Quote.prop = {
    quote : PropTypes.string ,
    author : PropTypes.string, 
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