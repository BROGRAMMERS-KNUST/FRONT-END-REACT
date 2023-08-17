import React from "react";
import { useState } from "react";
import {
  Button,
  Typography,
  Grid,
  Paper,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

const ChangePasswordHirer = () => {
  const history = useHistory();
  const [user] = useState(JSON.parse(localStorage.getItem("profile")));
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [openerror, setOpenError] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  let freelancerId = null;
  const paperStyle = {
    padding: 20,
    fontFamily: "Nunito",
    fontWeight: "700",
    width: 400,
    margin: "100px auto",
  };

  const [currentpassword, setCurrentPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const changepasswordData = {
    currentpassword: currentpassword,
    newpassword: newpassword,
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
    setDisabled(false);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setDisabled(false);
  };
  const handleSubmit = async (e) => {
    setDisabled(true);
    freelancerId = user.result._id;
    e.preventDefault();
    console.log(changepasswordData);
    try {
      const url = `https://brogrammers-knust.herokuapp.com/user/changepassword/${freelancerId}`;
      const { data } = await axios.post(url, changepasswordData);
      setMessage(data.message);
      setOpenError(false);
      setOpen(true);
      dispatch({ type: "LOGOUT" });
      setTimeout(() => {
        history.push("/");
        window.location.reload();
      }, 1500);
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
            variant="h6"
            color="primary"
            sx={{ fontFamily: "Nunito", fontWeight: "700" }}
          >
            Change Password - Hirer
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            type="password"
            label="Current Password"
            placeholder="Enter current password"
            variant="standard"
            required
            fullWidth
            sx={{ marginTop: 4, marginBottom: 2, fontFamily: "Nunito" }}
            onChange={handleCurrentPasswordChange}
          />

          <TextField
            type="password"
            label="New Password"
            placeholder="Enter new password"
            variant="standard"
            required
            fullWidth
            sx={{ marginTop: 0, marginBottom: 2, fontFamily: "Nunito" }}
            onChange={handleNewPasswordChange}
          />

          <Button
            sx={{
              marginBottom: 1,
              fontFamily: "Nunito",
              fontWeight: "700",
              marginTop: 2,
            }}
            variant="contained"
            fullWidth
            disabled={disabled}
            type="submit"
          >
            Sumbit
          </Button>
        </form>
        <Snackbar open={open} autoHideDuration={10000}>
          <Alert variant="filled" severity="success" sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>

        <Snackbar open={openerror} autoHideDuration={10000}>
          <Alert variant="filled" severity="error" sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
      </Paper>
    </Grid>
  );
};

export default ChangePasswordHirer;
