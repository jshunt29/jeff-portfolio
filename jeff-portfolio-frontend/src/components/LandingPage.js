import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

// Styled Components using Emotion
const LandingContainer = styled('section')({
  padding: '100px 20px',
  textAlign: 'center',
});

const Headshot = styled('img')(({ theme }) => ({
  width: '150px',
  borderRadius: '50%',
  marginRight: '20px',
  [theme.breakpoints.down('sm')]: {
    width: '120px',  // Smaller size for mobile screens
  },
}));

function LandingPage() {
  return (
    <LandingContainer>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Headshot 
            src="/images/headshot.jpg" 
            alt="Jeff Hunt"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" gutterBottom>
            Jeff Hunt
          </Typography>
          <Typography variant="body1" paragraph>
            Data-Driven MBA Candidate Specializing in Finance & Analytics
          </Typography>
          {/* Inspirational Quote */}
          <Typography variant="body2" paragraph style={{ fontStyle: 'italic' }}>
            "You can't put a limit on anything. The more you dream, the farther you get." – Michael Phelps
          </Typography>
          {/* External link to LinkedIn */}
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="https://www.linkedin.com/in/jeffrey-hunt-4160b7b2"
            target="_blank"  // Open link in a new tab
            rel="noopener noreferrer"  // Security measure for external links
          >
            Get in Touch
          </Button>
        </Grid>
      </Grid>
    </LandingContainer>
  );
}

export default LandingPage;
