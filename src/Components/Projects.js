import Container from '@mui/material/Container';
import ResponsiveAppBar from './ResAppBar.js';
import WorkGallery from './WorkGallery.jsx';

const Projects = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'black' }}>
      <Container>
        <ResponsiveAppBar />
        <WorkGallery />
      </Container>
    </div>
  );
};

export default Projects;
