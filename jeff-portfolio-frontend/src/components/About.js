import React from 'react';
import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Styled Components using Emotion
const AboutContainer = styled('section')({
  padding: '50px 20px',
  textAlign: 'left',
});

const AboutHeadshot = styled('img')(({ theme }) => ({
  width: '80%',
  borderRadius: '10px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',  // Make it full-width for smaller screens
  },
}));

function AboutSection() {
  return (
    <AboutContainer>
      <Grid container spacing={3} alignItems="center">
        {/* Headshot Image */}
        <Grid item xs={12} sm={6}>
          <AboutHeadshot 
            src="/images/headshot.jpg" 
            alt="Jeff Hunt"
          />
        </Grid>
        {/* About Me Text */}
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            I have always been drawn to numbers, data, and their practical applications in the world. While my background is rooted in finance, I’ve continually sought to bridge the gap between math, technology, and data analytics.
          </Typography>
          <Typography variant="body1" paragraph>
            My journey has taught me that pushing limits—whether in the pool or in my career—is essential for growth.
          </Typography>
          {/* Inspirational Quote */}
          <Typography variant="body2" paragraph style={{ fontStyle: 'italic' }}>
            "The only easy day was yesterday." – Michael Phelps
          </Typography>
          
          {/* Mission Statement */}
          <Typography variant="h5" gutterBottom>
            Mission Statement
          </Typography>
          <Typography variant="body1" paragraph>
            I am dedicated to leveraging my financial expertise, creative problem-solving, and leadership to deliver value both independently and within teams. I bring a positive influence through strong communication and collaboration, always striving to adapt to dynamic challenges. With experience working on nationwide and international projects, whether remote or in-office, I am sensitive to diverse cultures and customs, ensuring that I work effectively and respectfully across various environments. My goal is to continuously learn, share my knowledge, and contribute innovative solutions that make a lasting impact.
          </Typography>
        </Grid>
      </Grid>
    </AboutContainer>
  );
}

export default AboutSection;

