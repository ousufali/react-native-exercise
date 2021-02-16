import React from 'react';
import { View, StyleSheet, } from 'react-native';
import CardFooterValue from './CardFooterValue';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});






const CardFooter = ({ stars, forks, review, rating }) => {
    return (
        <View style={styles.container} >
            <CardFooterValue  value={stars} label={"Stars"} testid={"starstestid"} />
            <CardFooterValue value={forks} label={"Forks"} testid={"forkstestid"}/>
            <CardFooterValue value={review} label={"Reviews"} testid={"reviewstestid"}/>
            <CardFooterValue value={rating} label={"Rating"} testid={"ratingtestid"}/>

        </View>
    );
};

export default CardFooter;