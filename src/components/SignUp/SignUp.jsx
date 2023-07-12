import React, {useState} from 'react';
import {Box, Button, Container, Grid, Link, TextField, Typography} from "@mui/material";
import routes from "../../constants/routes";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSignUp = async (event) => {
        event.preventDefault();
        const result = await auth.signUp(email, password, { firstName, lastName });
        if (result.success) {
            navigate(routes.emailConfirmation + `?email=${email}`);
        } else {
            alert(result.message);
        }
    };
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
                <Typography component="h1" variant="h5" align="center">
                    Sign up
                </Typography>
                <Box component="form" noValidate sx={{mt: 3}}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="First Name"
                                name="First Name"
                                autoComplete="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Last Name"
                                name="Last Name"
                                autoComplete="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Email"
                                name="Email"
                                autoComplete="Email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                label="Password"
                                name="Password"
                                autoComplete="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className='submit'
                                onClick={onSignUp}
                            >
                                Sign Up
                            </Button>
                        </Grid>
                        <Grid item justifyContent="flex-end">
                            <Link href={routes.signIn} variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default SignUp;
