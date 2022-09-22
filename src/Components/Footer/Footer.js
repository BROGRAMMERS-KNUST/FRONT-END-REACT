import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';



  export default function Footer(){
  return( 
    <footer>
        <box>
          <Container maxWidth="lg">
            <Grid container spacing={5}>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Categoriess</Box>
                <Box>
                  <Link underline="none" href="/" color ="inherit">Web development</Link>                  
                </Box>
                <Box>
                  <Link underline="none" href="/" color="inherit"> Photogragphy</Link>
                </Box>
                <Box>
                  <Link underline="none" href="/" color="inherit">Catering Services</Link>
                </Box>
                <Box>
                  <Link underline="none" href="/" color="inherit"> Writing</Link>
                </Box>
                <Box>
                  <Link underline="none" href="/" color="inherit">Graphic Design</Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Account</Box>
                <Box>
                  <Link underline="none" href="/" color="inherit">Login</Link>                  
                </Box>
                <Box>
                  <Link underline="none" href="/" color="inherit"> Register</Link>
                </Box>
              </Grid>     
               <Grid item xs={12} sm={4}>
                <Box borderBottom={1}>Support</Box>
                <Box>
                  <Link underline="none" href="/" color="inherit">Help</Link>              
                </Box>
                <Box>
                  <Link underline="none" href="/" color="inherit"> How to Sell on Stulancer</Link>
                </Box>
              </Grid>
              </Grid>
          </Container>
        </box>
        <hr/>
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Brogrammers | All right reserved | Terms of Service | Privacy
          </p>
        </div>
        
        
      
   
</footer>
      );
 }   
  