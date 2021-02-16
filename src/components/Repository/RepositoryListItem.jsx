import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import CardFooter from '../Card/CardFooter';
import CardBody from '../Card/CardBody';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/react-hooks';
import { GET_SINGLE_REPOSITORY } from '../../graphql/quries';
import ReviewItem from '../Review/ReviewItem';
import RepositoryInfo from './RepositoryInfo';


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
    separator: {
        height: 20,

    },
    flatListContainer: {
        paddingBottom: 100,
        margin: 10,
         
    }
});



const ItemSeparator = () => <View style={styles.separator} />;




const RepositoryListItem = ({ repository }) => {

    const REPO_ID = useParams('id')

    if (Object.keys(REPO_ID).length > 0) {
        // console.log("repo_id", REPO_ID)
        // console.log("repo_id.length", Object.keys(REPO_ID).length)

        const queryResult = useQuery(GET_SINGLE_REPOSITORY, {
            variables: { "REPO_ID": REPO_ID.id },
            fetchPolicy: 'cache-and-network'
        });
        if (!queryResult.loading) {
            repository = queryResult.data.repository;
            const { reviews } = repository;
            // console.log("reviews:",reviews)
            return (
                <View style={styles.flatListContainer}>
                    <FlatList
                        ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
                        data={reviews.edges}
                        renderItem={({ item }) => <ReviewItem review={item} />}
                        keyExtractor={({ node }) => node.id}
                        ItemSeparatorComponent={ItemSeparator}
                    />
                </View>
            );
        }
        // console.log("queryResult:", queryResult);
        // console.log("queryResult.data:", queryResult.data);
    }


    // console.log("ID:", REPO_ID);
    // console.log("repository: ", repository)




    if (repository != undefined) {
        return (
            <View style={styles.flexContainer} >
                <CardBody name={repository.fullName} language={repository.language} description={repository.description} imageUri={repository.ownerAvatarUrl} />
                <CardFooter stars={repository.stargazersCount} forks={repository.forksCount} review={repository.reviewCount} rating={repository.ratingAverage} />
            </View >
        );
    } else {
        return (
            <View></View>
        )
    }



};

export default RepositoryListItem;