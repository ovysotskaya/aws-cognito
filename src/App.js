import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { Dashboard } from "./components/Dashboard";
import { EmailConfirmation } from "./components/EmailConfirmation";
import { useAuth } from "./hooks/useAuth";
import { Box } from "@mui/material";
import { PrivateRoute } from "./components/PrivateRoute";
import routes from "./constants/routes";
import './App.css';

function App() {
    const { isLoading } = useAuth();

    if (isLoading) {
        return <Box />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={routes.dashboard} element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
                <Route exact path={routes.signIn} element={<SignIn/>}/>
                <Route exact path={routes.signUp} element={<SignUp/>}/>
                <Route exact path={routes.emailConfirmation} element={<EmailConfirmation/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
