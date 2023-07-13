import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Grid, Link, TextField, Typography } from "@mui/material";
import routes from "../../constants/routes";
import {useAuth} from "../../hooks/useAuth";

const SignIn = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignIn = async (event) => {
        event.preventDefault();
        const result = await auth.signIn(email, password);
        if (result.success) {
            navigate({ pathname: routes.dashboard });
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
                    Sign in
                </Typography>
                <Box component="form" noValidate sx={{mt: 1}}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Email"
                        name="Email"
                        autoComplete="Email"
                        autoFocus
                        margin="normal"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Password"
                        name="Password"
                        autoComplete="Password"
                        type="password"
                        margin="normal"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='submit'
                        sx={{mt: 3, mb: 2}}
                        onClick={onSignIn}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href={routes.signUp} variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default SignIn;
