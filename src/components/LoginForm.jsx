import { useState } from 'react';
import * as usersService from '../utilities/users-service';
import { Box, Button, Container, FormGroup, FormLabel, Input, Typography } from '@mui/material';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)

      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <Container>
      <Box sx={{ maxWidth: '500px', display: "flex", flexDirection: "column", justifyContent: "center", m: "auto", mt: 35 }}>
      <Typography variant='h4' sx={{ textAlign: "center", mb: 3 }}>Sign in to Modado</Typography>
        <form autoComplete="off" onSubmit={handleSubmit}>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <Input sx={{ mb: 2 }} type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          </FormGroup>
          <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" , alignItems: "center" }}>
          <Button sx={{ mt: 2 }} variant='outlined' type="submit">LOG IN</Button>
          </Box>
        </form>
      </Box>
      <Typography>&nbsp;{error}</Typography>
    </Container>
  );
}