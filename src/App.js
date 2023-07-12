import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { Dashboard } from "./components/Dashboard";
import routes from "./constants/routes";
import EmailConfirmation from "./components/EmailConfirmation/EmailConfirmation";
import './App.css';

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path={routes.dashboard} element={<Dashboard/>}/>
                <Route exact path={routes.signIn} element={<SignIn/>}/>
                <Route exact path={routes.signUp} element={<SignUp/>}/>
                <Route exact path={routes.emailConfirmation} element={<EmailConfirmation/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
