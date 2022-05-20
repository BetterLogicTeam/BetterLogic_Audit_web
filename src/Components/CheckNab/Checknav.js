
import './Checknavstyle.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Home', 'Audit Services', 'Our Team','Why Choose Us' ,'REQUEST A QUOTE'];
const settings = ['Home', 'Audit Services', 'Our Team'];

const ResponsiveAppBar = ({setShow}) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" className="navcolor">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h1"
            noWrap
            component="div"
            sx={{ mr: 3,fontSize:'20px',fontSize:'30px',fontWeight:'bold',padding:'0 0rem 0 4rem',  display: { xs: 'none', md: 'flex' },flexDirection:'row',alignItems:'center' }}
          >
             <img src="LOGO.png" alt="" width="15%" style={{marginRight:'rem'}} />   
            <span className="ml-2"> ΛRBITECH</span> 
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem >
              <a  c href="#HomePage">    <Typography textAlign="center" className="reshover">Home</Typography></a>
                </MenuItem>
                <MenuItem >
                 <a href="#teampage"> <Typography textAlign="center" className="reshover">Our Team</Typography></a>
                </MenuItem>
                <MenuItem >
                 <a href="#Partners"> <Typography textAlign="center" className="reshover">Partner</Typography></a>
                </MenuItem>
                <MenuItem >
                 <Typography textAlign="center" onClick={() => setShow(true)} className="reshover">Contact</Typography>
                 <MenuItem >
                 <a href="#Partners"> <Typography textAlign="center" className="reshover">White Page</Typography></a>
                </MenuItem>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1,ml:'2rem', display: { xs: 'flex', md: 'none' ,flexDirection:'row',alignItems:'center'} }}
          >
            <img src="LOGO.png" alt="" width="15%" style={{marginLeft:'rem'}} />   
            <span className="ml-2"> ΛRBITECH</span> 
          </Typography>
          <Box sx={{ flexGrow: 1,fontSize:'100px', marginRight:'5.5rem', display: { xs: 'none', md: 'flex' }, flexDirection:'row',justifyContent:'end' }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              
              </Button>
              
            ))} */}
            <Button    sx={{ my: 2,  display: 'block' }} ><a className="btnhover" href="#HomePage"> Home</a></Button>
            {/* <Button  sx={{ my: 2, color: 'white', display: 'block' }} >Audit Services</Button> */}
            <Button    sx={{ my: 2,  display: 'block' }} > <a className="btnhover" href="#teampage">Our Team</a> </Button>
            <Button    sx={{ my: 2,  display: 'block' }} > <a className="btnhover mr-3 " href="#Partners">Partners</a> </Button>
            <Button    sx={{ my: 2,  display: 'block' }} > <a className="btnhover mr-3 " href="#">White Page</a> </Button>

           <div className="btnnav">

            <button className="btn btn-danger buttonp   "  style={{marginTop:'-7.5rem'}} onClick={() => setShow(true)} ><span className="btnhover  ">Request a Quote</span> </button>
           </div>
            


            {/* <Button className="btn  "
                                // onClick={()=>setShow(true)}
                                >Request a Quote</Button> */}

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}

            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
