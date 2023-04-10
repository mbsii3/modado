import * as userService from "../../utilities/users-service";
import { AppBar, Container , Toolbar, Typography, Button, IconButton } from "@mui/material";




export default function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Modado
                    </Typography>
                    <nav>
                    <span>Hey, {user.firstName}!</span>
                    
                    <Button color="inherit" onClick={handleLogOut}>Log Out</Button>
                    
                    </nav>
                </Toolbar>
            


            </Container>
        </AppBar>

    );
}