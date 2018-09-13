import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  View,
  Image,
  Text
} from 'react-native';

export default class ImageScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() { 
        const url = "\'" + this.props.image.url + "\'";
        const description = this.props.image.description;
        const userName = this.props.image.user_name;
        console.log(this.props.image.setShowAnimation);
        const setShowAnimation = this.props.image.setShowAnimation;
        const descriptionTextStyle = {
            color: "#000000",
            fontSize: 30,
            textAlign: "center"
        }

        const userNameTextStyle = {
            color: "#000000",
            fontSize: 25,
            textAlign: "center"
        }
        
        return (
            <View style={styles.contaier}>
                <Image
                    style={styles.image}
                    source={{uri: this.props.image.url}}
                    onLoadStart={() => setShowAnimation(true)}
                    onLoadEnd={() => setShowAnimation(false)}
                />
                <Text
                    accessibilityLabel={description}
                    style= {descriptionTextStyle} >
                    "{description}"
                </Text>
                <Text
                    accessibilityLabel={userName}
                    style= {userNameTextStyle} >
                    - {userName}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 100,
        alignSelf: 'center',
    },
  });


  ImageScreen.propTypes = {
    
}
