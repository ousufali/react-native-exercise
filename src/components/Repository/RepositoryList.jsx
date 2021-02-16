import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import RepositoryListItem from './RepositoryListItem';
import useRepositories from '../../hooks/useRepositories';
import RepositoryFilter from './RepositoryFilter';

import { useHistory } from 'react-router-native';
import { useDebounce } from 'use-debounce';




const styles = StyleSheet.create({
    separator: {
        height: 20,

    },
    flatListContainer: {
        paddingBottom : 100,
        margin: 10
    }
});

const ItemSeparator = () => <View style={styles.separator} />;



export const RepositoryListContainer = ({ repositories, dropDownHandler, searchHandler, onEndReached, searchFilter }) => {

    const history = useHistory();


    if (!repositories || !repositories.edges) {
        return (
            <View>
            </View>
        );
    } else {

        const repositoryNodes = repositories
            ? repositories.edges.map((edge) => edge.node)
            : [];
        console.log("repositoriesNodes", repositoryNodes)
        return (
            <View style={styles.flatListContainer}>
                <FlatList
                    ListHeaderComponent={<RepositoryFilter dropDownHandler={dropDownHandler} searchHandler={searchHandler} searchValue={searchFilter} />}
                    data={repositoryNodes}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={
                        ({ item }) =>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => history.push(`/${item.id}`)}>
                                <RepositoryListItem repository={item} />
                            </TouchableOpacity>
                    }
                    onEndReached={onEndReached}
                    onEndReachedThreshold={0.5}

                />
            </View>
        );
    }
};



const RepositoryList = () => {
    const [dropDownFilter, setDropDownFilter] = useState({ orderBy: "CREATED_AT" });
    const [searchFilter, setSearchFilter] = useState('');
    const [searchFilterValue] = useDebounce(searchFilter, 700);

    const { repositories, fetchMore } = useRepositories(dropDownFilter, searchFilterValue);

    const dropDownHandler = (value) => {
        // setFilter(value);
        console.log("filterValue: ", value);
        switch (value) {
            case "latest":
                setDropDownFilter({
                    orderBy: "CREATED_AT",
                });
                break;
            case "highest-rated":
                setDropDownFilter({
                    orderBy: "RATING_AVERAGE",
                    orderDirection: "DESC"
                });
                break;
            case "lowest-rated":
                setDropDownFilter({
                    "orderBy": "RATING_AVERAGE",
                    "orderDirection": "ASC"
                });
                break;
        }
    };
    const searchHandler = (searchQuery) => {
        setSearchFilter(searchQuery);
        console.log("searchValue: ", searchFilter, "\nsearchQuery: ", searchQuery)
    };
    const onEndReached = () => {
        console.log("End of list Reached.");
        fetchMore()
    };

    return (
        <View>
            <RepositoryListContainer repositories={repositories} dropDownHandler={dropDownHandler} searchHandler={searchHandler} searchFilter={searchFilter} onEndReached={onEndReached} />
        </View>
    );


};


export default RepositoryList;