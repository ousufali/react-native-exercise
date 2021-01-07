import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryListItem from './RepositoryListItem';
import useRepositories from '../hooks/useRepositories';



const styles = StyleSheet.create({
    separator: {
        height: 20,

    },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

    const { repositories } = useRepositories();
    // console.log("repositoryList: ", repositories);

    if (!repositories  || !repositories.edges) {
        return (
            <View>

            </View>
        );
    } else {
        const repositoriesNodes = repositories ? repositories.edges.map(edge => edge.node) : [];


        return (
            <FlatList
                data={repositoriesNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) => <RepositoryListItem repository={item} />}

            />
        );
    }



};

export default RepositoryList;