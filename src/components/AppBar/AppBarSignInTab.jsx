import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '.././Text';
import { useHistory } from 'react-router-native';





const styles = StyleSheet.create({
    container: {
        marginLeft: 10

    },

});

const AppBarSignInTab = () => {
    const history = useHistory();
    return (
        <View style={styles.container}>
            {/* <TouchableWithoutFeedback onPress={() => history.push('/signin')}> */}
            <TouchableOpacity onPress={() => history.push('/signin')} activeOpacity={0.8}>
                <Text fontSize="subheading" fontWeight="bold" color="primary" >
                    SignIn
                 </Text>

            </TouchableOpacity>
            {/* </TouchableWithoutFeedback> */}
        </View >

    );
};


export default AppBarSignInTab;