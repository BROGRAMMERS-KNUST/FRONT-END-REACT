import {
  AppBar,
  Avatar,
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
import Login from "../Auth/Login";
import SignInOut from "./SignInOut";

function Header() {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const user = null;

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

          {/*CHECKS IF USER IS LOGGED IN AND DECIDES TYPE OF HEADER*/}
          {user ? (
            <div>
              <Avatar alt={user.result.name} src={user.result.imageUrl}>
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography variant="h6">{user.result.name}</Typography>
              <Button
                disableElevation
                onClick={() => {}}
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
                Log out
              </Button>
            </div>
          ) : (
            <div>
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
            </div>
          )}
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
      </AppBar>
      <Divider />
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
