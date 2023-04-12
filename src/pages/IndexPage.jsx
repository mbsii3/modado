import UserInfoCard from "../components/UserInfoCard";
import AllPostsFeed from "../components/AllPostsFeed";

import { Grid } from "@mui/material";
import WeatherWidget from "../components/WeatherWidget";

export default function IndexPage({ user }) {
   return (
    <Grid container spacing={0} >
        <Grid item xs>
            
            <UserInfoCard user={user} />
        
        </Grid>
        <Grid item xs={5}>
            
            <AllPostsFeed user={user} />
        </Grid>
        <Grid item xs>
            <WeatherWidget />
              
        </Grid>
        </Grid>
   ); 
}