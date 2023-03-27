import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Link
      href="https://www.canva.com/design/DAFY3bJ2N1M/iPohBwdbsL8_PPRGDRz-fQ/view?utm_content=DAFY3bJ2N1M&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        width: '100vw',
        textAlign: 'center',
        position: 'absolute',
        fontSize: '1rem',
        left: 0,
        bottom: 30,
        color: 'rgb(237, 245, 225, 0.5)',
        fontFamily: 'Montserrat',
      }}
    >
      Переглянути презентацію
    </Link>
  );
};

export default Footer;
