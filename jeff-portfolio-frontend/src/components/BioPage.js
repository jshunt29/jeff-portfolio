import React from 'react';
import { Grid, Typography } from '@mui/material';

function BioPage() {
  return (
    <div className="content">
      <Grid container spacing={3}>
        {/* Bio Text */}
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            My Bio
          </Typography>
          <Typography variant="body1" paragraph>
            I’ve always been captivated by the power of numbers, data, and their practical applications in the world. While my foundation is in finance, my passion lies in bridging the gap between math, technology, and data analytics. This drive led me to pursue an MBA, specializing in both finance and marketing. Through my academic journey and professional experiences, I’ve developed a unique blend of skills—from data-driven decision-making and predictive finance to leadership, public relations, and storytelling.
          </Typography>
          <Typography variant="body1" paragraph>
            In my career, I’ve worked closely with C-level executives, leading teams through high-impact projects and operational challenges. At SSA, I quickly rose through the ranks, leading new initiatives, overseeing large-scale events, and managing talent acquisition. My ability to build strong relationships with both clients and team members has been instrumental in these successes. Working with executives has taught me that understanding both the data and the people behind it is essential for making informed, impactful decisions.
          </Typography>
          <Typography variant="body1" paragraph>
            As an avid swimmer, I draw inspiration from athletes like Katie Ledecky and Michael Phelps. Phelps famously said, “You can’t put a limit on anything. The more you dream, the farther you get.” This mindset fuels my professional and personal pursuits. Whether in the boardroom or in the pool, I believe in pushing boundaries to achieve excellence. My experiences as a lifeguard, swim coach, and competitive swimmer have instilled resilience, leadership, and the value of teamwork—skills I apply in all areas of my life.
          </Typography>
          <Typography variant="body1" paragraph>
            Outside of work, I’m passionate about outdoor activities like scuba diving, swimming, and surfing. I thrive on connecting with people, whether it’s over a round of golf, a casual beach day, or in a professional setting. I also enjoy writing, exploring new technologies, and staying up-to-date on developments in AI and global geopolitics.
          </Typography>
          <Typography variant="body1" paragraph>
            I believe deeply in treating people with respect and fairness—values that guide both my personal and professional interactions. Whether mentoring new hires or developing financial strategies, I strive to balance the technical with the human element, creating meaningful connections and inspiring growth.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default BioPage;
