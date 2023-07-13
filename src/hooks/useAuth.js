import { Amplify, Auth } from "aws-amplify";
import React, { createContext, useContext, useEffect, useState } from "react";
import { AwsConfigAuth } from "../config/auth";

Amplify.configure({ Auth: AwsConfigAuth });

const authContext = createContext({});

export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
    return useContext(authContext);
};

const useProvideAuth = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then(({ attributes: { email, given_name: firstName, family_name: lastName }}) => {
                setEmail(email);
                setFirstName(firstName);
                setLastName(lastName)
                setIsAuthenticated(true);
                setIsLoading(false);
            })
            .catch(() => {
                setEmail("");
                setIsAuthenticated(false);
                setIsLoading(false);
            });
    }, []);

    const signIn = async (email, password) => {
        try {
            const result = await Auth.signIn(email, password);
            setEmail(result.attributes.email);
            setFirstName(result.attributes.given_name);
            setLastName(result.attributes.family_name)
            setIsAuthenticated(true);
            return { success: true, message: "" };
        } catch (error) {
            return {
                success: false,
                message: "LOGIN FAIL",
            };
        }
    };
    const signUp = async (email, password, { firstName, lastName }) => {
        try {
            await Auth.signUp({
                username: email,
                password,
                attributes: {
                    given_name: firstName,
                    family_name: lastName
                }});
            return { success: true, message: "" };
        } catch (error) {
            return {
                success: false,
                message: "REGISTRATION FAIL",
            };
        }
    };

    const confirmSignUp = async (username, code) => {
        try {
            await Auth.confirmSignUp(username, code);
            return { success: true, message: "" };
        } catch (error) {
            return {
                success: false,
                message: "CONFIRM FAIL",
            };
        }
    };

    const signOut = async () => {
        try {
            await Auth.signOut();
            setEmail("");
            setIsAuthenticated(false);
            return { success: true, message: "" };
        } catch (error) {
            return {
                success: false,
                message: "LOGOUT FAIL",
            };
        }
    };

    return {
        isLoading,
        isAuthenticated,
        email,
        firstName,
        lastName,
        signIn,
        signOut,
        signUp,
        confirmSignUp
    };
};
