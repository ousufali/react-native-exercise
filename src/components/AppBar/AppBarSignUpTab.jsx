import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '.././Text';
import { useHistory } from 'react-router-native';





const styles = StyleSheet.create({
    container: {
        marginLeft: 10

    },

});

const AppBarSignUpTab = () => {
    const history = useHistory();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => history.push('/signup')} activeOpacity={0.8}>
                <Text fontSize="subheading" fontWeight="bold" color="primary" >
                    SignUp
                 </Text>

            </TouchableOpacity>
        </View >

    );
};


export default AppBarSignUpTab;