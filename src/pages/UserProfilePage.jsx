import { Grid } from "@mui/material";
import ProfileUserInfoCard from "../components/ProfileUserInfoCard";
import UserPostsFeed from "../components/UserPostsFeed";
import WeatherWidget from "../components/WeatherWidget";


export default function UserDetailsPage({user}) {
    return (
        <Grid container spacing={0} >
        <Grid item xs>
            
            <ProfileUserInfoCard user={user} />
        
        </Grid>
        <Grid item xs={6}>
            
            <UserPostsFeed user={user} />
        </Grid>
        <Grid item xs>
            <WeatherWidget />
              
        </Grid>
        </Grid>
    );
}