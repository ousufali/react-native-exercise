import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from './Text';
import { useApolloClient } from '@apollo/react-hooks';
import AuthStorageContext from '../contexts/AuthStorageContext';





const styles = StyleSheet.create({
    container: {
        marginLeft: 10

    },

});



const AppBarRepositoryTab = () => {
    const apollo_client = useApolloClient();
    const authStorage = useContext(AuthStorageContext);

    const handleLogout = async () => {
        // console.log("logging out");
        await authStorage.removeAccessToken();
        apollo_client.resetStore();
    };


    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => handleLogout()} activeOpacity={0.8}>
                <Text fontSize="subheading" fontWeight="bold" color="primary" >
                    Sign Out
                 </Text>

            </TouchableOpacity>
        </View >

    );
};


export default AppBarRepositoryTab;