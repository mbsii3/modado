import * as userService from "../../utilities/users-service";
import { AppBar, Container , Toolbar, Typography, Button } from "@mui/material";




export default function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        Modado
                    </Typography>
                    <Button color="inherit" onClick={handleLogOut}>Log Out</Button>
                    
                    
                </Toolbar>
            </Container>
        </AppBar>

    );
}