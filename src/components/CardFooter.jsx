import React from 'react';
import { View, StyleSheet, } from 'react-native';
import CardFooterValue from './CardFooterVaue';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});






const CardFooter = ({ stars, forks, review, rating }) => {
    return (
        <View style={styles.container}>
            <CardFooterValue value={stars} label={"Stars"} />
            <CardFooterValue value={forks} label={"Forks"} />
            <CardFooterValue value={review} label={"Review"} />
            <CardFooterValue value={rating} label={"Rating"} />

        </View>
    );
};

export default CardFooter;