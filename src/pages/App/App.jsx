import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard';
import AllPostsFeed from '../../components/AllPostsFeed/AllPostsFeed';
import { Grid } from '@mui/material';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Grid container spacing={0} >
            <Grid item xs>
              
                <UserInfoCard user={user} />
              

            </Grid>
            <Grid item xs={6}>
              <AllPostsFeed />
            </Grid>
            <Grid item xs>
              
            </Grid>
          </Grid>

        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
