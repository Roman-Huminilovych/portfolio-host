import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from './ResAppBar';
import romanpic from '../Assets/main.jpg';

// import Footer from './Footer';
import { useSpring, animated, config } from '@react-spring/web';
import { about_par } from './contact_info.js';

const About = () => {
  const MainText = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 400,
    config: config.molasses,
  });

  return (
    <div className="about-page-div">
      <Container sx={{ pb: 10 }}>
        <ResponsiveAppBar />
        <animated.div style={MainText}>
          <Grid
            container
            sx={{
              mt: 15,
              '@media only screen and (max-width: 500px)': {
                mt: 5,
              },
            }}
          >
            <Grid lg={6}>
              <img
                className="about-pic"
                alt="Roman Lovich"
                src={romanpic}
              ></img>
            </Grid>
            <Grid lg={6}>
              <Typography
                variant="h5"
                sx={{
                  mt: '10%',
                  pl: 1,
                  pr: 1,
                  color: 'white',
                  textAlign: 'left',
                  fontFamily: 'Montserrat',
                  whiteSpace: 'pre-line',
                }}
              >
                {about_par}
              </Typography>
            </Grid>
          </Grid>
        </animated.div>
      </Container>
    </div>
  );
};

export default About;
