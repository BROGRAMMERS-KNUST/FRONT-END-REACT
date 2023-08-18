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
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

import axios from "axios";
const UpdateProfile = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openerror, setOpenError] = useState(false);
  const [message, setMessage] = useState("");
  const freelancerData = {
    fullName: user.result.fullname,
    bio: user.result.bio,
    portfolioLink: user.result.portfolioLink,
    telephoneNumber: user.result.telephoneNumber,
    whatsappLink: user.result.whatsappLink,
    profilePic: user.result.profilePic,
    specificService: user.result.specificService,
  };

  let freelancerId = null;
  const paperStyle = {
    padding: "1.25rem",
    fontFamily: "Nunito",
    fontWeight: "700",
    width: "25rem",
    margin: "6rem auto",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    freelancerId = user.result._id;
    setDisabled(true);
    try {
      const url = `https://brogrammers-knust.herokuapp.com/user/updateservice/${freelancerId}`;
      const { data } = await axios.patch(url, freelancerData);
      setMessage(data.message);
      setOpenError(false);
      setOpen(true);
      setTimeout(() => {
        navigate("/portfoliopage");
        window.location.reload();
      }, 1550);
      localStorage.setItem("profile", JSON.stringify(data));
      console.log(freelancerId);
      console.log(freelancerData);
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
            Stulancer
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
              freelancerData.fullName = e.target.value;
            }}
            inputProps={{ maxLength: 30 }}
          />
          <TextField
            label="Bio"
            placeholder="Enter your Bio"
            variant="standard"
            required
            fullWidth
            multiline
            defaultValue={user.result.bio}
            sx={{ marginBottom: 2 }}
            onChange={(e) => {
              setDisabled(false);
              freelancerData.bio = e.target.value;
            }}
          />

          <TextField
            label="Portfolio Link"
            placeholder="Enter Portfolio link"
            variant="standard"
            required
            fullWidth
            multiline
            defaultValue={user.result.portfolioLink}
            onChange={(e) => {
              setDisabled(false);
              freelancerData.portfolioLink = e.target.value;
            }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Telephone Number"
            type="number"
            placeholder="Enter Telephone number"
            variant="standard"
            required
            fullWidth
            defaultValue={user.result.telephoneNumber}
            multiline
            onChange={(e) => {
              setDisabled(false);
              freelancerData.telephoneNumber = e.target.value;
            }}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="WhatsApp Link"
            placeholder="Enter WhatsApp Link"
            variant="standard"
            fullWidth
            multiline
            defaultValue={user.result.whatsappLink}
            onChange={(e) => {
              setDisabled(false);
              freelancerData.whatsappLink = e.target.value;
            }}
            sx={{ marginBottom: 2 }}
          />

          <FormControl sx={{ marginRight: 2, minWidth: 360, marginBottom: 2 }}>
            <InputLabel sx={{ marginLeft: -1.9, marginTop: 1.3 }} id="service">
              Service
            </InputLabel>
            <Select
              labelId="service"
              variant="standard"
              id="demo-simple-select-autowidth"
              fullWidth
              onChange={(e) => {
                setDisabled(false);
                freelancerData.service = e.target.value;
              }}
              label="service"
            >
              <MenuItem value="Photographer">Photographer</MenuItem>
              <MenuItem value="Web Developer">Web Developer</MenuItem>
              <MenuItem value="Caterer">Caterer</MenuItem>
              <MenuItem value="Graphic Designer">Graphic Designer</MenuItem>
              <MenuItem value="Author">CV Writer</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Specific service"
            placeholder="Enter specific service"
            variant="standard"
            required
            defaultValue={user.result.specificService}
            fullWidth
            multiline
            onChange={(e) => {
              setDisabled(false);
              freelancerData.specificService = e.target.value;
            }}
            sx={{ marginBottom: 2 }}
          />
          <input
            type="file"
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
                    freelancerData.profilePic = uri;
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
          <Button
            sx={{
              marginTop: 1.7,
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
        </form>
      </Paper>
    </Grid>
  );
};

export default UpdateProfile;
