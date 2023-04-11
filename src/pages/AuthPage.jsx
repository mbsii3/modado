import { useState } from 'react';
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

export default function AuthPage({setUser}) {
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <main>
            <h1>AuthPage</h1>
            {showSignUp ?
            <SignUpForm setUser={setUser} />
            :
            <LoginForm setUser={setUser} />
}
            <button onClick={ () => setShowSignUp(!showSignUp) }>{ showSignUp ? 'Log In' : 'Sign Up' }</button>
        </main>
    );
}