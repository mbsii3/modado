import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../utilities/users-service';
import NavBar from '../components/NavBar';
import AuthPage from './AuthPage';
import IndexPage from './IndexPage';
import UserProfilePage from './UserProfilePage';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route index element={<IndexPage user={user} />} />
            <Route path=':id' element={<UserProfilePage user={user} />} />
          </Routes>
          
          
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
