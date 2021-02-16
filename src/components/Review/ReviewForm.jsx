import React from 'react';
import { View, Button } from 'react-native';
import FormikTextInput from '../FormikTextInput';

const styles = {
    viewStyle: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-around',
        backgroundColor: 'white',
        alignItems: 'stretch',
        padding: 16,

    }
};




const ReviewForm = ({ onSubmit }) => {
    return (
        <View style={styles.viewStyle}>
            <FormikTextInput name="ownerName" placeholder="Repository owner name" testID="ownerName" />
            <FormikTextInput name="repositoryName" placeholder="Repository name" testID="repositoryName" />
            <FormikTextInput name="rating" placeholder="Rating between 0 and 100" testID="rating" />
            <FormikTextInput multiline name="text" placeholder="Review" testID="reviewText" />
            <Button testID="reviewFormSubmitButton" onPress={onSubmit} title="Create a review" />
        </View>
    );
};

export default ReviewForm;