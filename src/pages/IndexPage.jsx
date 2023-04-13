import UserInfoCard from "../components/UserInfoCard";
import AllPostsFeed from "../components/AllPostsFeed";
import { Card, Grid } from "@mui/material";
import WeatherWidget from "../components/WeatherWidget";
import NewsFeed from "../components/NewsFeed";
import UpcomingEvents from "../components/UpcomingEvents";

export default function IndexPage({ user }) {
   return (
    <Grid container spacing={1} >
        <Grid item xs>
        <Card sx={{m: 2, backgroundColor: "silver"}}>
            <Card sx={{m: 2}}>
                <WeatherWidget />
            </Card>
            <UpcomingEvents />
        </Card>
        
        </Grid>
        <Grid item xs={5}>
            <UserInfoCard user={user} />
            <AllPostsFeed user={user} />
        </Grid>
        <Grid item xs>
            <Card sx={{m: 2, backgroundColor: "silver"}}>
                <NewsFeed />
            </Card>
            
              
        </Grid>
    </Grid>
   ); 
}