import UserInfoCard from "../components/UserInfoCard";
import AllPostsFeed from "../components/AllPostsFeed";

import { Grid } from "@mui/material";
import WeatherWidget from "../components/WeatherWidget";
import NewsFeed from "../components/NewsFeed";

export default function IndexPage({ user }) {
   return (
    <Grid container spacing={0} >
        <Grid item xs ></Grid>
        <Grid item xs={3}>
            
            <UserInfoCard user={user} />
        
        </Grid>
        <Grid item xs={4.5}>
            
            <AllPostsFeed user={user} />
        </Grid>
        <Grid item xs={3}>
            <WeatherWidget />
            <NewsFeed />
              
        </Grid>
        <Grid item xs>
        </Grid>
    </Grid>
   ); 
}