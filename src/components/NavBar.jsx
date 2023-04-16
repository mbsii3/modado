import * as userService from "../utilities/users-service";
import { AppBar, Container , Toolbar, Typography, Button } from "@mui/material";
import Switch from '@mui/material/Switch';
import { Link } from "@mui/material";




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
                    
                       
                       <Link href="/" underline="none" sx={{ color:"white", fontWeight: "700"}}>Modado</Link>
                    
                    </Typography>
                    <Switch size="small" sx={{mr: 1}} />
                    <Button color="inherit" variant="outlined" onClick={handleLogOut}>Log Out</Button>
                    
                    
                </Toolbar>
            </Container>
        </AppBar>

    );
}