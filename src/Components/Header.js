import {
  AppBar,
  Box,
  Button,
  Divider,
  Modal,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Login from "./Login";
import SignInOut from "./SignInOut";

function Header() {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <Box>
      <AppBar
        color="transparent"
        sx={{ backdropFilter: "blur(20px)" }}
        elevation={1}
      >
        <Toolbar>
          <Typography
            marginLeft={2}
            color="primary"
            variant="h2"
            fontSize={30}
            sx={{ flexGrow: 1 }}
            fontFamily="Nunito"
            fontWeight="700"
            letterSpacing={2}
          >
            STULANCER
          </Typography>

          {/**Join Button */}
          <Button
            onClick={() => {
              setOpen(true);
            }}
            disableElevation
            sx={{
              borderRadius: 5,
              backgroundColor: "#ffc400",
              ":hover": { backgroundColor: "#DFAE0C" },
              marginRight: 2,
              fontFamily: "Nunito",
              fontWeight: "700",
            }}
            size="large"
            variant="contained"
          >
            Join
          </Button>

          <Button
            disableElevation
            onClick={() => {
              setOpenLogin(true);
            }}
            color="secondary"
            sx={{
              borderRadius: 5,
              marginRight: 2,
              fontFamily: "Nunito",
              fontWeight: "700",
            }}
            size="large"
            variant="outlined"
          >
            Login
          </Button>

          <Tabs textColor="secondary">
            <Tab
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              label="About us"
            />
          </Tabs>
        </Toolbar>
        <Divider />
      </AppBar>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <SignInOut />
      </Modal>

      <Modal
        open={openLogin}
        onClose={() => {
          setOpenLogin(false);
        }}
      >
        <Login />
      </Modal>
    </Box>
  );
}

export default Header;
