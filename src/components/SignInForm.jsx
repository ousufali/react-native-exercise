import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import Text from './Text';

const styles = {
    buttonStyle: {
        backgroundColor: theme.colors.primary,
        borderRadius: 4,
        padding: 10,
        marginTop  :2
       

    },
    viewStyle: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-around',
        backgroundColor: 'white',
        alignItems: 'stretch',
        padding: 16,

    },
    buttonTextStyle: {
        color: 'white',
        alignSelf: 'center'

    }
};





const SignIn = ({ onSubmit }) => {
    return (
        <View style={styles.viewStyle}>
            <FormikTextInput name="username" placeholder="Username" style={styles.inputStyle} />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry style={styles.inputStyle} />
            <TouchableOpacity activeOpacity={0.8} onPress={onSubmit}>
                <View style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle} fontWeight="bold">submit</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
};

export default SignIn;