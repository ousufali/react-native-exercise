import React from 'react';
import { View, StyleSheet } from 'react-native';
import CardFooter from './CardFooter';
import CardBody from './CardBody';


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

    }
});






const RepositoryListItem = ({ repository }) => {
    return (
        <View style={styles.flexContainer} >
            <CardBody name={repository.fullName} language={repository.language} description={repository.description} imageUri={repository.ownerAvatarUrl} />
            <CardFooter stars={repository.stargazersCount} forks={repository.forksCount} review={repository.reviewCount} rating={repository.ratingAverage} />

        </View >
    );
};

export default RepositoryListItem;