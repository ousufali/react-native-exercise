import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { SignInFormContainer } from '../components/SignIn';

describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            // render the SignInContainer component, fill the text inputs and press the submit button
            const onSubmit = jest.fn();
            const { debug, getByTestId } = render(
                <SignInFormContainer onSubmit={onSubmit} />
            );

            // debug();

            // console.log(getByTestId)


            fireEvent.changeText(getByTestId('usernametestid'), 'mynewusername');
            fireEvent.changeText(getByTestId('passwordtestid'), 'mynewpassword');
            fireEvent.press(getByTestId('SUBMITBUTTON'));

            await waitFor(() => {
                // expect the onSubmit function to have been called once and with a correct first argument
                expect(onSubmit).toHaveBeenCalledTimes(1);
                expect(onSubmit.mock.calls[0][0]).toEqual({
                    username: 'mynewusername',
                    password: 'mynewpassword',
                });

            });
        });
    });
});