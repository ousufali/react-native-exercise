import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '../Text';
import { useHistory } from 'react-router-native';



const styles = StyleSheet.create({
    container: {
        marginLeft: 10

    },

});



const AppBarReviewFormTab = () => {
    const history = useHistory()

    return (
        <TouchableOpacity onPress={() => history.push('/review')} activeOpacity={0.8}>
            <View style={styles.container}>

                <Text fontSize="subheading" fontWeight="bold" color="primary" >
                    Create review
                 </Text>

            </View >
        </TouchableOpacity>


    );
};


export default AppBarReviewFormTab;