import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../App.css';

export default function GuestFooter() {
  return (
    <Paper sx={{marginTop: "5vh", bottom: 0}} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 1,
          }}
        >
          <Typography variant="caption" color="initial">
            Made with 💜 by <a href="https://github.com/aprilschen" target={"blank"}>April Chen</a>, 2023.
          </Typography>

        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >

          <GitHubIcon sx={{mx: 1}}
          onClick={event =>  window.open('https://github.com/aprilschen', '_blank')}/>
          <LinkedInIcon sx={{mx: 1}}
          onClick={event =>  window.open('https://www.linkedin.com/in/sc06/', '_blank')}/>
          <EmailIcon sx={{mx: 1}}
          onClick={event =>  window.open("mailto:" + 'shiweichen06@gmail.com', '_blank')}/>
          <InstagramIcon sx={{mx: 1}}
          onClick={event =>  window.open('https://www.instagram.com/shiwei_chen06/', '_blank')}/>
        </Box>
      </Container>
    </Paper>
  );
}