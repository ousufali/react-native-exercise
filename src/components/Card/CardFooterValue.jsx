import React from 'react';
import { View, StyleSheet, } from 'react-native';
import Text from '../Text';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
    },
    labels: {
        display: 'flex',
        marginTop: 5,
        
    }
});



const calculateValue = (value) => {
    return value >= 1000 ? `${Math.round((value / 1000) * 10) / 10}k` : value;
};


const CardFooterValue = ({ value, label ,testid }) => {
    return (
        <View style={styles.container} >
            <Text  fontWeight="bold" testID={testid} >{calculateValue(value)} </Text>
            <Text style={styles.labels} fontSize="textSecondary" > {label}</Text>
        </View>
    );
};

export default CardFooterValue;