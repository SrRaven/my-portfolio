import { Typography, Button as MuiButton, styled } from "@mui/material";
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const About = () => {
    const StyledAbout = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        overflow: "hidden",


    }));


    
    const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate back one step in the history
  };

  
  return (
    <StyledAbout>
      <Typography variant="h2" gutterBottom>
        About Page
      </Typography>
      <Typography variant="body1">
        This is the about page. You can add more content here.
      </Typography>
      <Stack direction="row" spacing={2} justifyContent="center" mt={55} pt={2}>
        <MuiButton variant="contained" color="secondary" onClick={handleBack} startIcon={<ArrowBackIosIcon />}>
        Voltar
      </MuiButton>
      </Stack>
      </StyledAbout>
  );
};

export default About;