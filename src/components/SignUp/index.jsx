import React from 'react';
import { View } from 'react-native';
import SignUpFrom from './SignUpForm';
import { Formik } from 'formik';
import * as yup from 'yup';

import useSignUp from '../../hooks/useSignUp';


const SignUpFormvalidationSchema = yup.object().shape({
    username: yup
        .string()
        .required("username is missing")
        .min(1, "Username is a required string with a length between 1 and 30")
        .max(30, "Username is a required string with a length between 1 and 30"),
    password: yup
        .string()
        .required("password is missing")
        .min(5, "Password is a required string with a length between 5 and 50")
        .max(50, "Password is a required string with a length between 5 and 50"),
    confirmPassword: yup
        .string()
        .required("password confirmation missing")
        .oneOf([yup.ref('password')], "Mismatched confirmation")

});


const initialState = {
    username: '',
    password: '',
    confirmPassword: ''

};


export const SignUpFormContainer = ({ onSubmit }) => {
    return (
        <Formik initialValues={initialState} onSubmit={onSubmit} validationSchema={SignUpFormvalidationSchema}>
            {({ handleSubmit }) => <SignUpFrom onSubmit={handleSubmit} />
            }
        </Formik>
    )
}


const SignUp = () => {
    const [signUp] = useSignUp();

    const handleSignup = async (values) => {
        console.log("from SignUp form", values);
        const { username, password } = values;

        try {
            const { id, usernamed } = await signUp({ username, password });
            console.log("signedUP id , username", id, "  ,", username);
        } catch (e) {
            console.log("error: ", e);
        }

    };


    return (
        <View>
            <SignUpFormContainer onSubmit={handleSignup} />
        </View>
    );
};

export default SignUp;