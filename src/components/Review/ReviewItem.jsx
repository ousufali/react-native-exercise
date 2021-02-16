import React from 'react';
import { View, StyleSheet, } from 'react-native';
import Text from '.././Text';
import theme from '../../theme';
import { format } from 'date-fns';


const styles = StyleSheet.create({
    ratingContainer: {
        alignItems: 'center',
        borderColor: theme.colors.primary,
        borderRadius: 45 / 2,
        borderWidth: 3,
        display: 'flex',
        justifyContent: 'center',
        height: 45,
        width: 45,
    },
    reviewContainer: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 16,
        paddingBottom: 12,
    },
    buttonContainer: {
        backgroundColor: theme.colors.containerBackground,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 16,
    },
    textContainer: {
        display: 'flex',
        flexShrink: 1,
        flexDirection: 'column',
        paddingLeft: 16,
    },
    text: {
        marginBottom: 4,
    },
   
});


const ReviewItem = ({ review }) => {
    const { createdAt, rating, text } = review.node;

    console.log("review:", review);

    if (review != undefined) {
        return (
            <View style={styles.flexContainer} >
                <View style={styles.reviewContainer}>
                    <View style={styles.ratingContainer}>
                        <Text color="primary" fontSize="subheading" fontWeight="bold">
                            {rating}
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text fontWeight="bold" style={styles.text}>
                            {review.node.user.username}
                        </Text>
                        <Text color="textSecondary" style={styles.text}>
                            {format(new Date(createdAt), 'dd.MM.yyyy')}
                        </Text>
                        <Text style={styles.text}>{text}</Text>
                    </View>
                </View>
            </View >
        );
    } else {
        return (
            <View></View>
        )
    }



};

export default ReviewItem;