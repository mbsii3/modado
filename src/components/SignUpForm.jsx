import { Component } from "react";
import { signUp } from '../utilities/users-service';
import { Box, Button, Container, FormGroup, Card, TextField, Typography } from "@mui/material";

export default class SignUpForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        location: '',
        occupation: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const {firstName, lastName, userName, email, location, occupation, password} = this.state;
            const formData = {firstName, lastName, userName, email, location, occupation, password};
            const user = await signUp(formData);
            this.props.setUser(user);
            
        } catch {
            this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    };

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <Container>
            <Box sx={{ maxWidth: '500px', display: "flex", flexDirection: "column", justifyContent: "center", m: "auto", mt: 10 }} >
              <Card sx={{ p: 3 }}>
              <Typography sx={{ textAlign: "center", mb: 1 }} variant="h5">Sign Up for Modado!</Typography>
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <FormGroup>
                <TextField margin="normal" type="text" name="firstName" label="First Name" value={this.state.firstName} onChange={this.handleChange} required />
                <TextField margin="normal" type="text" name="lastName" label="Last Name" value={this.state.lastName} onChange={this.handleChange} required />
                <TextField margin="normal" type="text" name="userName" label="User Name" value={this.state.userName} onChange={this.handleChange} required />
                <TextField margin="normal" type="email" name="email" label="Email" value={this.state.email} onChange={this.handleChange} required />
                <TextField margin="normal" type="text" name="location" label="Location" value={this.state.location} onChange={this.handleChange} />
                <TextField margin="normal" type="text" name="occupation" label="Occupation" value={this.state.occupation} onChange={this.handleChange} />
                <TextField margin="normal" type="password" name="password" label="Password" value={this.state.password} onChange={this.handleChange} required />
                <TextField margin="normal" type="password" name="confirm" label="Confirm Password" value={this.state.confirm} onChange={this.handleChange} required />
                <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center" , alignItems: "center" }}>
                <Button sx={{ mt: 2 }} variant='outlined' type="submit" disabled={disable}>SIGN UP</Button>
                </Box>
                </FormGroup>
              </form>
              </Card>
            </Box>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </Container>
        );
      }
}