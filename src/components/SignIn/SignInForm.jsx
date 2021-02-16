import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import theme from '../../theme';
import Text from '../Text';

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





const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.viewStyle}>
            <FormikTextInput name="username" placeholder="Username" style={styles.inputStyle}      testID="usernametestid" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry style={styles.inputStyle}    testID="passwordtestid"/>
            <TouchableOpacity activeOpacity={0.8} onPress={onSubmit}>
                <View style={styles.buttonStyle}>
                    <Text testID={"SUBMITBUTTON"} style={styles.buttonTextStyle} fontWeight="bold">Sign In</Text>

                </View>
            </TouchableOpacity>

        </View>
    );
};

export default SignInForm;