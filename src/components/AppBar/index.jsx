import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarRepositoryTab from './AppBarRepositoryTab';
import AppBarSignInTab from './AppBarSignInTab';
import useAuthorized from '../../hooks/useAuthorized';
import AppBarLogoutTab from './AppBarLogoutTab';
import AppBarReviewFormTab from './AppBarReviewFormTab';
import AppBarSignUpTab from './AppBarSignUpTab';

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
    const isUserAuthorized = useAuthorized();

    console.log("isUserAuthorized:  ", isUserAuthorized);
    if (isUserAuthorized) {
        return (
            <View style={styles.container}>
                <ScrollView horizontal style={styles.scrollContainer}>
                    <Link to='/' component={AppBarRepositoryTab} />
                    <Link to='/review' component={AppBarReviewFormTab} />
                    <AppBarLogoutTab />
                </ScrollView>
            </View >
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal style={styles.scrollContainer}>
                <Link to='/' component={AppBarRepositoryTab} />
                <Link to='/signin' component={AppBarSignInTab} />
                <Link to='/signup' component={AppBarSignUpTab} />
            </ScrollView>
        </View >
    );
};

export default AppBar;