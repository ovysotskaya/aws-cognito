import React from 'react';
import {useAuth} from "../../hooks/useAuth";
import {Box, Button, Container} from "@mui/material";

const Dashboard = () => {
    const {firstName, lastName, signOut} = useAuth();

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h1>Hello, {firstName} {lastName}</h1>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className='submit'
                    sx={{mt: 3, mb: 2}}
                    onClick={() => signOut()}
                >
                    Sign In
                </Button>
            </Box>
        </Container>
    )
}

export default Dashboard;
