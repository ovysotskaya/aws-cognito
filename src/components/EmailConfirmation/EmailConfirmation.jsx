import React, { useState } from 'react';
import {Box, Button, Container, TextField, Typography} from "@mui/material";
import routes from "../../constants/routes";
import {useAuth} from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const EmailConfirmation = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const [code, setCode] = useState("");
    const [searchParams] = useSearchParams();

    const onEmailConfirmation = async (event) => {
        event.preventDefault();
        const result = await auth.confirmSignUp(searchParams.get("email"), code);
        if (result.success) {
            navigate({pathname: routes.signIn});
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
                    Check your email
                </Typography>
                <Box component="form" noValidate sx={{mt: 1}}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        label="Confirmation code"
                        name="Confirmation code"
                        margin="normal"
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className='submit'
                        sx={{mt: 3, mb: 2}}
                        onClick={onEmailConfirmation}
                    >
                        Send
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default EmailConfirmation;