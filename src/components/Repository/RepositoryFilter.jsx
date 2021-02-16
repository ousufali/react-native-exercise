import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Picker } from '@react-native-community/picker';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});

const RepositoryFilter = ({ dropDownHandler, searchHandler, searchValue }) => {



    return (
        <View>
            <Searchbar
                placeholder="Search"
                onChangeText={searchHandler}
                value={searchValue}

            />
            <View style={styles.container}>
                <Picker
                    onValueChange={dropDownHandler}
                >
                    <Picker.Item label='Latest repositories' value='latest' />
                    <Picker.Item label='Highest rated repositories' value='highest-rated' />
                    <Picker.Item label='Lowest rated repositories' value='lowest-rated' />
                </Picker>

            </View>
        </View>
    );
}

export default RepositoryFilter;