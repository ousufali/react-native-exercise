import React from 'react';
import { View, StyleSheet, Button, Linking } from 'react-native';
import CardFooter from '../Card/CardFooter';
import CardBody from '../Card/CardBody';

const styles = StyleSheet.create({
    flexContainer: {
        display: 'flex',
        padding: 5,
        backgroundColor: 'white'
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

    },
    buttonStyle: {
        backgroundColor: "blue",
        padding: 5,
        margin: 5

    }
});






const RepositoryInfo = ({ repository }) => {

    if (repository != undefined) {
        return (
            <View style={styles.flexContainer} >
                <CardBody name={repository.fullName} language={repository.language} description={repository.description} imageUri={repository.ownerAvatarUrl} />
                <CardFooter stars={repository.stargazersCount} forks={repository.forksCount} review={repository.reviewCount} rating={repository.ratingAverage} />
                <Button style={styles.buttonStyle} onPress={() => Linking.openURL(repository.url)} title={"Open in GitHub"} />

            </View >
        );
    } else {
        return (
            <View></View>
        )
    }



};

export default RepositoryInfo;