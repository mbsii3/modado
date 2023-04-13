import UserInfoCard from "../components/UserInfoCard";
import AllPostsFeed from "../components/AllPostsFeed";
import { Card, Grid } from "@mui/material";
import WeatherWidget from "../components/WeatherWidget";
import NewsFeed from "../components/NewsFeed";

export default function IndexPage({ user }) {
   return (
    <Grid container spacing={1} >
        <Grid item xs>
            
            <UserInfoCard user={user} />
        
        </Grid>
        <Grid item xs={6}>
            
            <AllPostsFeed user={user} />
        </Grid>
        <Grid item xs>
            <WeatherWidget />
            <Card sx={{m: 2}}>
                <NewsFeed />
            </Card>
            
              
        </Grid>
    </Grid>
   ); 
}