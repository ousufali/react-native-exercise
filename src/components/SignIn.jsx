import React from 'react';
import { View } from 'react-native';
import SignInFrom from './SignInForm';
import { Formik } from 'formik';
import * as yup from 'yup';


const SignINFormvalidationSchema = yup.object().shape({
    username: yup
        .string()
        .required("username is missing"),
    password: yup
        .string()
        .required("password is missing")
});

const initialState = {
    username: '',
    password: ''
};

const signInFormData = values => {
    console.log("from SignIn form", values);
};



const SignIn = () => {
    return (
        <View>
            <Formik initialValues={initialState} onSubmit={signInFormData} validationSchema={SignINFormvalidationSchema}>
                {({ handleSubmit }) => <SignInFrom onSubmit={handleSubmit} />
                }
            </Formik>
        </View>
    );
};

export default SignIn;