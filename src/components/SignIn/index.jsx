import React from 'react';
import { View } from 'react-native';
import SignInFrom from './SignInForm';
import { Formik } from 'formik';
import * as yup from 'yup';

import useSignIn from '../../hooks/useSignIn';


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


export const SignInFormContainer = ({ onSubmit }) => {
    return (
        <Formik initialValues={initialState} onSubmit={onSubmit} validationSchema={SignINFormvalidationSchema}>
            {({ handleSubmit }) => <SignInFrom onSubmit={handleSubmit} />
            }
        </Formik>
    )
}


const SignIn = () => {
    const [signIn] = useSignIn();

    const handleLogin = async (values) => {
        // console.log("from SignIn form", values);
        const { username, password } = values;

        try {
            const data = await signIn({ username, password });
            console.log("resultttt:    ", data.authorize.accessToken);
        } catch (e) {
            console.log("error: ", e);
        }

    };


    return (
        <View>
            <SignInFormContainer onSubmit={handleLogin} />
        </View>
    );
};

export default SignIn;