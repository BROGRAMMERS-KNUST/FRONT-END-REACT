import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Rating,
  Box,
  Modal,
  IconButton,
  Button,
  Avatar,
  Paper,
  Stack,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import WorkIcon from "@mui/icons-material/Work";
function getLabelText(value) {
  return value;
}
const StulancerComp = ({ stulancer }) => {
  const value = useState(4.5);
  const user = useState(JSON.parse(localStorage.getItem("profile")));
  getLabelText(value);
  const [open, setOpen] = useState(false);

  return (
    <Box>
      <Box>
        <Carousel sx={{ width: 300, height: 180 }} indicators={false}>
          <Box
            sx={{
              background:
                "url('https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600') ",

              width: 300,
              height: 180,
              backgroundSize: "cover",
              borderRadius: 1,
            }}
          />
          <Box
            sx={{
              background:
                "url('https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600') ",

              width: 300,
              height: 180,
              backgroundSize: "cover",
              borderRadius: 1,
            }}
          ></Box>

          <Box
            sx={{
              background:
                "url('https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=600') ",

              width: 300,
              height: 180,
              backgroundSize: "cover",
              borderRadius: 1,
            }}
          ></Box>
        </Carousel>
        {/* <Box
        sx={{
          
          backgroundSize: "cover",
          height: 180,
          width: 300,
          borderRadius: 1,
        }}
      ></Box> */}
        <Card
          sx={{ width: 300, ":hover": { cursor: "pointer" } }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <CardContent>
            <Stack direction="row" spacing={1}>
              <Avatar
                alt={stulancer.fullName}
                sx={{ bgcolor: "primary.light" }}
                src={stulancer.profilePic}
              ></Avatar>
              <Typography variant="h6">{stulancer.fullName}</Typography>
            </Stack>
            <div>
              <Typography marginTop={2} marginBottom={1} variant="body1">
                {stulancer.bio}
              </Typography>
            </div>
            <Rating
              name="read-only"
              value={stulancer.rating}
              precision={0.5}
              readOnly
            />
          </CardContent>
        </Card>
      </Box>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        {/*Freelancer modal,cannot be in a separate component because of close button */}
        <Paper
          elevation={6}
          sx={{
            width: 500,
            marginTop: 5,
            marginLeft: 62,
            paddingTop: 3,
          }}
        >
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
            sx={{ marginLeft: 55.5, marginTop: -1.5 }}
          >
            <CloseIcon />
          </IconButton>
          <Avatar
            sx={{
              bgcolor: "orange",
              top: "50%",
              marginLeft: 22,
              marginTop: 1,
              marginBottom: 3,
              width: 150,
              height: 150,
            }}
            src={stulancer.profilePic}
          />

          <Typography
            sx={{ textAlign: "center" }}
            fontSize={40}
            fontWeight="700"
            fontFamily="Nunito"
          >
            {stulancer.fullName}
          </Typography>
          <Typography
            fontSize={25}
            sx={{ textAlign: "center" }}
            color="primary"
            fontFamily="Nunito"
          >
            {stulancer.service}
          </Typography>

          <Box sx={{ display: "flex" }}>
            <Rating
              name="half-rating-read"
              value={value}
              precision={0.5}
              sx={{ paddingLeft: 20, marginBottom: 2 }}
              size="large"
              readOnly
              getLabelText={getLabelText}
            />

            <Typography
              sx={{ paddingLeft: 1.5 }}
              color="#646765"
              fontFamily="Nunito"
              fontWeight="700"
            >
              ({value})
            </Typography>
          </Box>
          <Typography
            sx={{ paddingLeft: 2, paddingTop: 2 }}
            color="#646765"
            fontFamily="Nunito"
            fontWeight="700"
          >
            Bio
          </Typography>
          <Typography
            sx={{ paddingLeft: 2, paddingBottom: 2 }}
            fontFamily="Nunito"
            color="#646765"
            variant="body2"
          >
            {stulancer.bio}
          </Typography>

          <Typography
            sx={{ paddingLeft: 2, paddingBottom: 1 }}
            fontFamily="Nunito"
            color="#646765"
            fontWeight="700"
          >
            Portfolio
          </Typography>
          <Button
            sx={{
              borderRadius: 5,
              marginLeft: 2,
              marginBottom: 2,
              fontFamily: "Nunito",
              fontWeight: "700",
            }}
            startIcon={<WorkIcon />}
            variant="contained"
            size="small"
          >
            Portfolio
          </Button>

          <Typography
            sx={{ paddingLeft: 2, paddingBottom: 1.2 }}
            fontFamily="Nunito"
            color="#646765"
            fontWeight="700"
          >
            Contact Me
          </Typography>
          {user ? (
            <Box sx={{}}>
              <Button
                sx={{
                  borderRadius: 5,
                  marginLeft: 2,
                  marginBottom: 5,
                  fontFamily: "Nunito",
                  fontWeight: "700",
                }}
                startIcon={<CallIcon />}
                variant="contained"
                size="small"
              >
                Call
              </Button>

              <Button
                href={stulancer.whatsappLink}
                sx={{
                  borderRadius: 5,
                  marginBottom: 5,
                  marginLeft: 2,
                  backgroundColor: "#1DA427",
                  ":hover": { backgroundColor: "#17761E" },
                  fontFamily: "Nunito",
                  fontWeight: "700",
                }}
                startIcon={<WhatsAppIcon />}
                variant="contained"
                size="small"
              >
                WhatsApp
              </Button>
            </Box>
          ) : (
            <Box>
              <Typography
                sx={{
                  paddingLeft: 2,
                  paddingBottom: 1,
                  ":hover": { cursor: "pointer", textDecoration: "underline" },
                }}
                fontFamily="Nunito"
                color="primary"
                fontWeight="700"
              >
                Login to see contact info
              </Typography>
            </Box>
          )}
        </Paper>
      </Modal>
    </Box>
  );
};

export default StulancerComp;
