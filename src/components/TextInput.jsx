import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
    input: {
        marginTop: 4,
        borderColor: theme.colors.mainBackground,
        borderWidth: 3,
        borderRadius: 4,
        padding : 10
    },
    wrongInput: {
        borderColor: theme.colors.error
    }
});

const TextInput = ({ style, error, ...props }) => {
    const textInputStyle = [style, styles.input, error && styles.wrongInput];

    return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;