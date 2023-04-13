import { Grid } from "@mui/material";
import ProfileUserInfoCard from "../components/ProfileUserInfoCard";
import UserPostsFeed from "../components/UserPostsFeed";


export default function UserDetailsPage({user}) {
    return (
        <Grid container spacing={0} >
        <Grid item xs></Grid>
        <Grid item xs={6}>
            <ProfileUserInfoCard user={user} />
            <UserPostsFeed user={user} />
        </Grid>
        <Grid item xs></Grid>
        </Grid>
    );
}