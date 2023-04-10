import { useState } from 'react';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import IndexPage from '../IndexPage/IndexPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <IndexPage user={user} />

        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
