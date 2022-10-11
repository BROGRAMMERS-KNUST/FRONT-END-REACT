import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import SocialFollow from "./SocialFollow";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 1, sm: 3 }}
        bgcolor="text.secondary"
        color="white"
        marginTop={8}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Categories</Box>
              <Box>
                <Link underline="none" href="/" color="inherit">
                  Home
                </Link>
              </Box>
              <Box>
                <Link underline="none" href="/webby" color="inherit">
                  Web development
                </Link>
              </Box>
              <Box>
                <Link underline="none" href="/photography" color="inherit">
                  {" "}
                  Photogragphy
                </Link>
              </Box>
              <Box>
                <Link underline="none" href="/food-services" color="inherit">
                  Food Services
                </Link>
              </Box>
              <Box>
                <Link
                  underline="none"
                  href="/writing&translation"
                  color="inherit"
                >
                  {" "}
                  Writing
                </Link>
              </Box>
              <Box>
                <Link underline="none" href="/graphic-design" color="inherit">
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
                <Link underline="none" href="/Help" color="inherit">
                  Help
                </Link>
              </Box>
              <Box>
                <Link underline="none" href="/Sales" color="inherit">
                  {" "}
                  How to Sell on Stulancer
                </Link>
              </Box>
            </Grid>
          </Grid>
          <hr />
          <div className="row">
            <p className="col-sm">
              <SocialFollow />
              &copy;{new Date().getFullYear()} Brogrammers | All right reserved
              | Terms of Service | Privacy
            </p>
          </div>
        </Container>
      </Box>
    </footer>
  );
}
