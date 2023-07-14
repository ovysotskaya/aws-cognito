import {screen, fireEvent, render} from "@testing-library/react";
import SignIn from "./SignIn";
import React from "react";
import AuthContext from "../../hooks/useAuth";
import * as router from "react-router"

beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => jest.fn())
})

test('SignIn component test', () => {
    const providedEmail = 'example@test.com'
    const providedPassword = 'Pa$$w0rD!'

    const signIn = jest.fn((email, password) => {
        expect(email).toBe(providedEmail);
        expect(password).toBe(providedPassword);

        return { success: true, message: "" };
    });

    render(
        <AuthContext.Provider value={{signIn}}>
            <SignIn />
        </AuthContext.Provider>);

    const emailInput = screen.getByLabelText(/^Email/)
    const passwordInput = screen.getByLabelText(/^Password/)

    fireEvent.change(emailInput, {target: {value: providedEmail}})
    fireEvent.change(passwordInput, {target: {value: providedPassword}})

    const signInButton = screen.getByText('Sign In')
    fireEvent.click(signInButton)

    expect(signIn).toHaveBeenCalledTimes(1)
});