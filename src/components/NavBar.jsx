import * as userService from "../utilities/users-service";
import { Link } from "react-router-dom";
import { AppBar, Container , Toolbar, Typography, Button } from "@mui/material";




export default function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    return (
        <AppBar position="static">
            <Container sx={{minWidth: "100%"}}>
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1, fontFamily: 'outfit' }}>
                    <Link to='/home' >
                        Modado
                    </Link>
                    </Typography>
                    <Button color="inherit" sx={{fontFamily: 'outfit'}} onClick={handleLogOut}>Log Out</Button>
                    
                    
                </Toolbar>
            </Container>
        </AppBar>

    );
}