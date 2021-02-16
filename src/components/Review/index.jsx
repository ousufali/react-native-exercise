import React from 'react';
import { View } from 'react-native';
import ReviewForm from './ReviewForm';
import { Formik } from 'formik';
import * as yup from 'yup';
import useReview from '../../hooks/useReview';
import { useHistory } from 'react-router-native';



const reviewFormValidationSchema = yup.object().shape({
    ownerName: yup.string().required('owner name missing'),
    repositoryName: yup.string().required('repository name missing'),
    rating: yup
        .number()
        .min(0, '0-100')
        .max(100, '0-100')
        .integer()
        .required('rating  is missing'),
    text: yup.string().notRequired(),
});


const initialFormValues = {
    ownerName: '',
    repositoryName: '',
    rating: '',
    text: '',
};

export const ReviewFormContainer = ({ onSubmit }) => {
    return (
        <Formik initialValues={initialFormValues} onSubmit={onSubmit} validationSchema={reviewFormValidationSchema}>
            {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />
            }
        </Formik>
    )
}


const Review = () => {
    const [createReview] = useReview();
    const history = useHistory();

    const handleReview = async (values) => {
        console.log("review form data:", values);
        const variables = {
            owner_name: values.ownerName,
            repo_name: values.repositoryName,
            rating: Number(values.rating),
            text: values.text
        };
        const ID = await createReview(variables)
        console.log("return ID of created view:", ID);
        if (ID !== undefined)
            history.push(`/${ID}`);

    };


    return (
        <View>
            <ReviewFormContainer onSubmit={handleReview} />
        </View>
    );
};

export default Review;