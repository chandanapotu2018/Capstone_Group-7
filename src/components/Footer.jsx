import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        padding: '20px',
        marginTop: 'auto',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} TaxiVista. All rights reserved.
      </Typography>

      <Box mt={1}>
        <Link href="#" color="textSecondary" style={{ marginRight: '8px' }}>
          Privacy Policy
        </Link>
        <Link href="#" color="textSecondary">
          Terms of Service
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
