import { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import NavBar from '../../components/NavBar/NavBar';
import AuthPage from '../AuthPage/AuthPage';
import UserInfoCard from '../../components/UserInfoCard/UserInfoCard';
import NewPostsForm from '../../components/NewPostsForm/NewPostsForm';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <UserInfoCard user={user} />
          <NewPostsForm />

        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}