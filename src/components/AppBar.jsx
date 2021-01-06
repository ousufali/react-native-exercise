import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarRepositoryTab from './AppBarRepositoryTab';
import AppBarSignInTab from './AppBarSignInTab';

import { Link } from 'react-router-native';




const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
        paddingBottom: Constants.statusBarHeight,
        backgroundColor: theme.colors.barBackgroundColor,


    },
    scrollContainer: {
        display: 'flex',
        flexDirection: 'row'
    }


    // ...
});


const AppBar = () => {

    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scrollContainer}>
                <Link to='/' component={AppBarRepositoryTab} />
                <Link to='/signin' component={AppBarSignInTab} />
            </ScrollView>
        </View >
    );
};

export default AppBar;