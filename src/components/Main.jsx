import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppBar from './AppBar/index';
import RepositoryList from './Repository/RepositoryList';
import RepositoryListItem from './Repository/RepositoryListItem';
import SignIn from './SignIn/index';
import SignUp from './SignUp/index';
import Review from './Review/index';

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
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path='/review'  >
                    <Review />
                </Route>
                <Route exact path='/:id'  >
                    <RepositoryListItem />
                </Route>



            </Switch>
        </View>
    );
};

export default Main;