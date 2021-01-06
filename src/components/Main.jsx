import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

import { Route, Switch } from 'react-router-native';
import theme from "../theme";


const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.mainBackground,
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container} >
            <AppBar />
            <Switch>
                <Route exact path='/'  >
                    <RepositoryList />
                </Route>

                <Route exact path='/signin'  >
                    <SignIn />
                </Route>

            </Switch>
        </View>
    );
};

export default Main;