import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Link
      href="https://portfolio-developer-rh.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        width: '100vw',
        textAlign: 'center',
        position: 'absolute',
        fontSize: '0,9rem',
        left: 0,
        bottom: 10,
        color: 'rgb(237, 245, 225, 0.5)',
        fontFamily: 'Montserrat',
      }}
    >
      Created by Me
    </Link>
  );
};

export default Footer;
