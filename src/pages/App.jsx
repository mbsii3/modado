import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../utilities/users-service';
import NavBar from '../components/NavBar';
import AuthPage from './AuthPage';
import IndexPage from './IndexPage';
import UserProfilePage from './UserProfilePage';
import PostCommentsPage from './PostCommentsPage';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';


export default function App() {
  const [user, setUser] = useState(getUser());
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'light' : 'dark'
    },
    typography: {
      fontFamily: "Outfit"
    }
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <main className="App">
      { user ?
        <>
          <NavBar setUser={setUser} check={darkMode} change={() => setDarkMode(!darkMode)}   />
          <Routes>
            <Route index element={<IndexPage user={user} />} />
            <Route path='/users/:userId' element={<UserProfilePage user={user} />} />
            <Route path='/posts/:postId' element={<PostCommentsPage user={user} />} />
          </Routes>
           
          
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
    </ThemeProvider> 
  );
}
