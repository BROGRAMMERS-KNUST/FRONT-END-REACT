import React from "react";
import { useState } from "react";
import {
  Select,
  MenuItem,
  Button,
  Typography,
  Grid,
  Paper,
  TextField,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { forgotpassword } from "../../api";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const paperStyle = {
    padding: 20,
    fontFamily: "Nunito",
    fontWeight: "700",
    // height: "72vh",
    width: 400,
    margin: "100px auto",
  };

  const [serviceType, setServiceType] = useState("");
  const [email, setEmail] = useState("");
  const forgotpasswordData = { email, serviceType };

  const handleChange = (event) => {
    setServiceType(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotpassword(forgotpasswordData, history));
  };

  return (
    <Grid>
      <Paper style={paperStyle} elevation={6}>
        <Grid item align="center">
          <Typography
            variant="h5"
            color="primary"
            sx={{ fontFamily: "Nunito", fontWeight: "700" }}
          >
            Password Recovery
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            placeholder="Enter email"
            variant="standard"
            required
            fullWidth
            sx={{ marginTop: 4, marginBottom: 2, fontFamily: "Nunito" }}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <FormControl sx={{ marginRight: 2, minWidth: 360, marginBottom: 2 }}>
            <InputLabel sx={{ marginLeft: -1.5 }} id="serviceType">
              Service
            </InputLabel>
            <Select
              labelId="serviceType"
              variant="standard"
              id="demo-simple-select-autowidth"
              fullWidth
              value={forgotpasswordData.serviceType}
              onChange={(e) => {
                forgotpasswordData.serviceType = e.target.value;
                handleChange(e);
              }}
              label="Account type"
            >
              <MenuItem value="Stulancer">Stulancer</MenuItem>
              <MenuItem value="Hirer">Hirer</MenuItem>
            </Select>
          </FormControl>

          <Button
            onClick="disable"
            sx={{
              marginBottom: 1,
              fontFamily: "Nunito",
              fontWeight: "700",
              marginTop: 2,
            }}
            variant="contained"
            fullWidth
            type="submit"
          >
            Sumbit
          </Button>
          <Typography variant="body2">
            A recovery link will be sent to the email you have provided
          </Typography>
        </form>
      </Paper>
    </Grid>
  );
};

export default ForgotPassword;
