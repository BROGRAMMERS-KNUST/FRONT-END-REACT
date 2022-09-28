import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import SocialFollow from './SocialFollow'

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 1, sm: 3 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Categories</Box>
              <Box >
                <Link underline="none" href="/" color="inherit">
                  Web development
                </Link>
              </Box>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  {" "}
                  Photogragphy
                </Link>
              </Box>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  Catering Services
                </Link>
              </Box>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  {" "}
                  Writing
                </Link>
              </Box>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  Graphic Design
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  {" "}
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Support</Box>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  Help
                </Link>
              </Box>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  {" "}
                  How to Sell on Stulancer
                </Link>
              </Box>
            </Grid>
          </Grid>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Brogrammers | All right reserved
              | Terms of Service | Privacy
            </p>
            <SocialFollow/>
          </div>
          
        </Container>
      </Box>
    </footer>
  );
}


























/*
import React from "react";
import SocialFollow from "./SocialFollow";
import {
  Box,
  Container,
  Heading,
} from './FooterStyles';








const FooterMain = () => {
  return (
    <Box>
      <h4 
                  style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
         STULANCER
      </h4>
      <Container>
            <Heading>About Us</Heading>
            <Heading>Services</Heading>
            <Heading>Contact Us</Heading>
            <SocialFollow/>

            <div  style={{ color: "green", 
                   textAlign: "center", 
                   fontSize:'15px',
                   fontWeight:'bold'
                    }}>
             
            </div>
         
      </Container>
    </Box>
  );
};
export default FooterMain;
*/