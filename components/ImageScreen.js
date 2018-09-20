import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { 
  StyleSheet, 
  View,
  Image,
  Text,
  Dimensions
} from 'react-native';


export default class ImageScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() { 
        const url = "\'" + this.props.image.url + "\'";
        const description = this.props.image.description;
        const userName = this.props.image.user_name;
        const setShowAnimation = this.props.image.setShowAnimation;
        

        const descriptionTextStyle = {
            color: "#FFF",
            fontSize: 25,
            textAlign: "center"
        }

        const userNameTextStyle = {
            color: "#FFF",
            fontSize: 15,
            textAlign: "center"
        }
        
        return (
            <View style={styles.contaier}>
                <Image
                    style={styles.image}
                    source={{uri: this.props.image.url}}
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
        width: Dimensions.get('window').width - 10,
        height: 400,
        alignSelf: 'center',
    },
  });


  ImageScreen.propTypes = {
    
}
