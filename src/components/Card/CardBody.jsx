import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Text from '../Text';


const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        padding: 10
    },
    upperbody: {
        display: 'flex',
        flexDirection: 'row'
    },
    imageStyle: {
        width: 40,
        height: 40,

    },
    cardBody: {
        display: 'flex',
        marginLeft: 10
    },
    languageStyle: {
        backgroundColor: "blue",
        padding: 3,
        borderRadius: 5,
        marginLeft: 50,
        alignSelf: "flex-start",

    }
});






const CardBody = ({ imageUri, description, language, name }) => {
    return (
        <View style={styles.flexContainer} >
            <View style={styles.upperbody} >
                <Image style={styles.imageStyle} source={{ uri: imageUri }} />

                <View style={styles.cardBody}>
                    <Text testID={"nametestid"} fontWeight="bold" fontSize="subHeading">{name}</Text>
                    <Text testID={"descriptiontestid"} color="textSecondary" >{description}</Text>
                </View>

            </View>
            <View style={styles.languageStyle} >
                <Text testID={"languagetestid"} style={{ color: 'white' }}>{language}</Text>
            </View>
        </View >
    );
};

export default CardBody;