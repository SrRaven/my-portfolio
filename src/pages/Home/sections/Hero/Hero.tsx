import { Box, Container, styled, Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { AnimatedBackground } from "../../../../components/AnimatedBackground";


const Hero = () => {
    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden", // Adicionado para evitar overflow
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px",
        },
    }))
    const StyledImg = styled("img")(() => ({
        width: "90%",
        borderRadius: "50%",
        objectFit: "cover",
        border: "2px white solid"
    }))

    return (
        <StyledHero>
            <Container maxWidth="lg" disableGutters> {/* Removido o padding padrão do Container */}
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={"-100"} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position={"relative"} textAlign={"center"}>
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Douglas Galvão</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">Sou Engenheiro de software</Typography>
                        <Stack direction="row" spacing={2} justifyContent="center" mt={2} pt={2}>
                            <Button variant="contained" color="secondary" startIcon={<DownloadIcon />} onClick={()=> console.log("download")}>
                                Download CV
                            </Button>
                            <Button variant="contained" color="secondary" startIcon={<AlternateEmailIcon />} onClick={()=> console.log("email")}>
                                Contact me
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    )
}

export default Hero