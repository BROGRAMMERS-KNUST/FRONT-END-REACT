import {
  Alert,
  Button,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import Resizer from "react-image-file-resizer";
import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const UpdateProfileHirer = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  const [disabled, setDisabled] = useState(false);
  const [openerror, setOpenError] = useState(false);
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const hirerData = {
    fullName: user.result.fullname,
    email: user.result.email,
    profilePic: user.result.profilePic,
  };

  let hirerId = null;
  const paperStyle = {
    padding: 20,
    fontFamily: "Nunito",
    fontWeight: "700",
    width: 400,
    margin: "100px auto",
  };

  const inputStyle = {
    marginBottom: 10,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    hirerId = user.result._id;
    setDisabled(true);
    try {
      const url = `https://brogrammers-knust.herokuapp.com/user/updatehirer/${hirerId}`;
      const { data } = await axios.patch(url, hirerData);
      setMessage(data.message);
      setOpenError(false);
      setOpen(true);
      setTimeout(() => {
        localStorage.clear();
        localStorage.setItem("profile", JSON.stringify(data));
        history.push("/");
        window.location.reload();
      }, 1550);
      localStorage.setItem("profile", JSON.stringify(data));
      console.log(hirerId);
      console.log(hirerData);
    } catch (error) {
      console.log(error);
      setMessage(error.response.data.message);
      setOpenError(true);
    }
  };

  return (
    <Grid>
      <Paper style={paperStyle} elevation={6}>
        <Grid item align="center">
          <Typography
            variant="h5"
            color="primary"
            sx={{ fontFamily: "Nunito", fontWeight: "700", marginBottom: 3 }}
          >
            Hirer
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            placeholder="Enter your fullname"
            variant="standard"
            required
            fullWidth
            multiline
            defaultValue={user.result.fullName}
            sx={{ marginBottom: 2 }}
            onChange={(e) => {
              setDisabled(false);
              hirerData.fullName = e.target.value;
            }}
            inputProps={{ maxLength: 30 }}
          />
          <TextField
            label="Email"
            placeholder="Enter your email"
            variant="standard"
            required
            fullWidth
            multiline
            defaultValue={user.result.email}
            sx={{ marginBottom: 2 }}
            onChange={(e) => {
              setDisabled(false);
              hirerData.email = e.target.value;
            }}
          />

          <input
            type="file"
            style={inputStyle}
            onChange={(e) => {
              try {
                Resizer.imageFileResizer(
                  e.target.files[0],
                  320,
                  250,
                  "JPEG",
                  50,
                  0,
                  (uri) => {
                    hirerData.profilePic = uri;
                  },
                  "base64",
                  200,
                  100
                );
              } catch (error) {
                console.log(error);
              }
            }}
          />
          {/* 
          <Link
            href='/changepassword-hirer'
            sx={{ marginLeft: 0, marginBottom: 1, marginTop: 4 }}
            underline='hover'
          >
            Change password
          </Link> */}
          <Button
            sx={{
              marginTop: 1.5,
              marginBottom: 1,
              fontFamily: "Nunito",
              fontWeight: "700",
            }}
            variant="contained"
            disabled={disabled}
            fullWidth
            type="submit"
          >
            Update profile
          </Button>
        </form>

        <Snackbar open={open} autoHideDuration={1000}>
          <Alert variant="filled" severity="success" sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>

        <Snackbar open={openerror} autoHideDuration={1000}>
          <Alert variant="filled" severity="error" sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
      </Paper>
    </Grid>
  );
};

export default UpdateProfileHirer;
