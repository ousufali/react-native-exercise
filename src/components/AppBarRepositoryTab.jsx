import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import { useHistory } from 'react-router-native';






const styles = StyleSheet.create({
    container: {
        marginLeft: 10

    },

});

const AppBarRepositoryTab = () => {
    const history = useHistory();
    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => history.push('/')} activeOpacity={0.8}>
                <Text fontSize="subheading" fontWeight="bold" color="primary" >
                    Repositories
                 </Text>

            </TouchableOpacity>
        </View >

    );
};


export default AppBarRepositoryTab;