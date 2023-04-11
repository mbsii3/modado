import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../utilities/users-service';
import NavBar from '../components/NavBar';
import AuthPage from './AuthPage';
import IndexPage from './IndexPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/home/*' element={<IndexPage user={user} />} ></Route>
          </Routes>
          
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
