import { useState } from 'react';
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button, Box, Typography } from '@mui/material';

export default function AuthPage({setUser}) {
    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <main>

            <Box display={{ display: "flex", flexDirection: "column", justifyContent: "center"  }}>
                <Button variant='contained' onClick={ () => setShowSignUp(!showSignUp) }>{ showSignUp ? 'Have an Account?' : 'New Account?' }</Button>
            </Box>
            
            {showSignUp ?
            <SignUpForm setUser={setUser} />
            :
            <LoginForm setUser={setUser} />
}
            <Typography variant='h1' sx={{ ml: 2 }}>Modado</Typography>
            
        </main>
    );
}