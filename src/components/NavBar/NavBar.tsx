import { MenuItem, Toolbar, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { Link as RouterLink } from 'react-router-dom';
const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-evenly',
        

    }))

  return (
    <>
    <AppBar position="absolute">
        <StyledToolbar>
        <MenuItem component={RouterLink} to="/about">Sobre</MenuItem>
        <MenuItem>Skills</MenuItem>
        <MenuItem>Projetos</MenuItem>
        </StyledToolbar>
    </AppBar>
    
    
    </>
  )
}

export default NavBar