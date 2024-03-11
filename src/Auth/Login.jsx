import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import { Container, Typography, Button, TextField, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log('Google Sign-In successful');
        console.log(user);
        console.log(token);
        onLogin();
        navigate('/');
      })
      .catch((error) => {
        console.error('Google Sign-In error:', error.message);
      });
  };

  const handleEmailSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Email/Password Sign-In successful');
      onLogin();
      navigate('/');
    } catch (error) {
      console.error('Email/Password Sign-In error:', error.message);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          padding: '16px',
          boxShadow: 1,
          borderRadius: '8px',
          backgroundColor: '#fff',
        }}
      >
        <Typography variant="h4">Login</Typography>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleGoogleSignIn}
          style={{ marginTop: '16px' }}
        >
          Sign In With Google
        </Button>

        <form
          onSubmit={(e) => {
            e.preventDefault(); // Prevent the form from submitting
            handleEmailSignIn();
          }}
          style={{ width: '100%', marginTop: '16px' }}
        >
          <TextField
            label="Email address"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="contained" color="primary" type="submit" style={{ marginTop: '16px' }}>
            Sign In
          </Button>
        </form>

        <Box sx={{ marginTop: '16px', textAlign: 'center' }}>
          <Link href="#" color="primary">
            Forgot password?
          </Link>
        </Box>

        <Box sx={{ marginTop: '16px', textAlign: 'center' }}>
          <Typography variant="body2">
            Don't have an account?{' '}
            <Link href="/register" color="primary">
              Register
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
