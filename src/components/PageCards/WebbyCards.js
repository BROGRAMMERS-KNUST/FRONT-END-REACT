import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Card, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faWhatsapp,
  faYoutube,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Badge from "@mui/material/Badge";
import WebCarousel from "../Carousels/WebCarousel";
const WebbyCards = (props) => {
  return (
    <div>
      <WebCarousel />

      <Stack direction="row" spacing={12} sx={{ flexWrap: "nowrap" }}>
        <Stack>
          <Carousel>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>

            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
          </Carousel>
          <Paper
            sx={{
              width: 350,
              height: 150,
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <Avatar alt="Maxwell" sx={{ bgcolor: "primary.light" }}>
                MX
              </Avatar>
              <Typography sx={{ marginTop: 1, marginLeft: 0.4 }}>
                Max
              </Typography>
            </Badge>
            <Box
              sx={{
                "&:hover": { color: "purple" },
              }}
            >
              I'll develop a modern web app or e-commerce website
              <div>
                <Rating precision={0.5} value={3} readOnly />
              </div>
            </Box>
          </Paper>

          <Paper>
            <Stack direction="row" spacing={2}>
              <a
                href="http://www.whatsapp.com/Brogrammers</Box>"
                className="whatsApp icon"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="1x" />
              </a>

              <a href="https://www.youtube.com/" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </a>

              <a href="https://www.twitter.com/" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>

              <a href="https://www.gmail.com/" className="google social">
                <FontAwesomeIcon icon={faGoogle} size="1x" />
              </a>

              <span>
                Starting at <b>$100</b>
              </span>
              <Rating icon={<FavoriteIcon />} max={1}></Rating>
            </Stack>
          </Paper>
          <Typography
            variant="h5"
            width="300px"
            sx={{
              fontFamily: "Nunito",
              marginTop: 1,
            }}
          ></Typography>
          <br></br>
        </Stack>

        <Stack>
          <Carousel>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-vector/isometric-landing-page_52683-5717.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-psd/gradient-technology-design-template_23-2149336711.jpg?size=626&ext=jpg') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-psd/various-web-printable-templates-with-screen_23-2148450117.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753')",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
          </Carousel>
          <Paper
            sx={{
              width: 350,
              height: 150,
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <Avatar alt="Maxwell" sx={{ bgcolor: "success.light" }}>
                RM
              </Avatar>
              <Typography sx={{ marginTop: 1, marginLeft: 0.4 }}>
                Rosemond
              </Typography>
            </Badge>
            <Box
              sx={{
                "&:hover": { color: "orange" },
              }}
            >
              I'll develop a professional wordpress website design
              <div>
                <Rating precision={0.5} value={3} readOnly />
              </div>
            </Box>
          </Paper>

          <Paper>
            <Stack direction="row" spacing={2}>
              <a
                href="http://www.whatsapp.com/Brogrammers</Box>"
                className="whatsApp icon"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="1x" />
              </a>

              <a href="https://www.youtube.com/" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </a>

              <a href="https://www.twitter.com/" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>

              <a href="https://www.gmail.com/" className="google social">
                <FontAwesomeIcon icon={faGoogle} size="1x" />
              </a>

              <span>
                Starting at <b>$70</b>
              </span>
              <Rating icon={<FavoriteIcon />} max={1}></Rating>
            </Stack>
          </Paper>
          <Typography
            variant="h5"
            width="300px"
            sx={{
              fontFamily: "Nunito",
              marginTop: 1,
            }}
          ></Typography>
          <br></br>
        </Stack>

        <Stack>
          <Carousel>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/premium-vector/online-shopping-illustration-with-smartphone-shopping-store_115083-316.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/premium-photo/tokyo-japan-june-05-2022-shopify-web-page-displayed-modern-laptop-smartphone-notebook-red-background-shopify-logo-iphone_132310-8583.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>

            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-photo/closeup-shot-two-pretty-afro-american-girls-using-their-phones-while-holding-shopping-bags_181624-46178.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753')",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
          </Carousel>
          <Paper
            sx={{
              width: 350,
              height: 150,
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <Avatar alt="Maxwell" sx={{ bgcolor: "primary.light" }}>
                Mk
              </Avatar>
              <Typography sx={{ marginTop: 1, marginLeft: 0.4 }}>
                Musk
              </Typography>
            </Badge>
            <Box
              sx={{
                "&:hover": { color: "purple" },
              }}
            >
              I will build a profitable shopify dropping store
              <div>
                <Rating precision={0.5} value={3} readOnly />
              </div>
            </Box>
          </Paper>

          <Paper>
            <Stack direction="row" spacing={2}>
              <a
                href="http://www.whatsapp.com/Brogrammers</Box>"
                className="whatsApp icon"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="1x" />
              </a>

              <a href="https://www.youtube.com/" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </a>

              <a href="https://www.twitter.com/" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>

              <a href="https://www.gmail.com/" className="google social">
                <FontAwesomeIcon icon={faGoogle} size="1x" />
              </a>

              <span>
                Starting at <b>$70</b>
              </span>
              <Rating icon={<FavoriteIcon />} max={1}></Rating>
            </Stack>
          </Paper>
          <Typography
            variant="h5"
            width="300px"
            sx={{
              fontFamily: "Nunito",
              marginTop: 1,
            }}
          ></Typography>
          <br></br>
        </Stack>
      </Stack>
      {
        //new set of stacks
      }
      <Stack direction="row" spacing={12} sx={{ flexWrap: "nowrap" }}>
        <Stack>
          <Carousel>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/premium-vector/health-tracking-glassmorphic-design-neumorphic-elements-kit-mobile-app-ui-ux-gui-screens-set_9209-5179.jpg?size=626&ext=jpg') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-psd/phone-screen-ui-ux-app-presentation-mockup_165789-263.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>

            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/premium-vector/fitness-mobile-app-ui_1302-17270.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
          </Carousel>
          <Paper
            sx={{
              width: 350,
              height: 150,
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <Avatar alt="Valaria" sx={{ bgcolor: "primary.light" }}>
                VL
              </Avatar>
              <Typography sx={{ marginTop: 1, marginLeft: 0.4 }}>
                Valaria
              </Typography>
            </Badge>
            <Box
              sx={{
                "&:hover": { color: "purple" },
              }}
            >
              I will create eye catching website UI and UX design for your
              business within 12 hours
              <div>
                <Rating precision={0.5} value={3} readOnly />
              </div>
            </Box>
          </Paper>

          <Paper>
            <Stack direction="row" spacing={2}>
              <a
                href="http://www.whatsapp.com/Brogrammers</Box>"
                className="whatsApp icon"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="1x" />
              </a>

              <a href="https://www.youtube.com/" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </a>

              <a href="https://www.twitter.com/" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>

              <a href="https://www.gmail.com/" className="google social">
                <FontAwesomeIcon icon={faGoogle} size="1x" />
              </a>

              <span>
                Starting at <b>$200</b>
              </span>
              <Rating icon={<FavoriteIcon />} max={1}></Rating>
            </Stack>
          </Paper>
          <Typography
            variant="h5"
            width="300px"
            sx={{
              fontFamily: "Nunito",
              marginTop: 1,
            }}
          ></Typography>
          <br></br>
        </Stack>

        <Stack>
          <Carousel>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-psd/front-view-business-mockup-sign-design_23-2148951860.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-psd/japan-exterior-advertising-mockup_23-2149199289.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-psd/city-sign-design-mockup_23-2149061482.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-psd/frontal-minimal-3d-phones-mockup-levitating_135149-104.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753')",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
          </Carousel>
          <Paper
            sx={{
              width: 350,
              height: 150,
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <Avatar alt="Maxwell" sx={{ bgcolor: "success.light" }}>
                ES
              </Avatar>
              <Typography sx={{ marginTop: 1, marginLeft: 0.4 }}>
                Edwardson
              </Typography>
            </Badge>
            <Box
              sx={{
                "&:hover": { color: "gold" },
              }}
            >
              I will do psd web template or psd website mockup design
              <div>
                <Rating precision={0.5} value={3} readOnly />
              </div>
            </Box>
          </Paper>

          <Paper>
            <Stack direction="row" spacing={2}>
              <a
                href="http://www.whatsapp.com/Brogrammers</Box>"
                className="whatsApp icon"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="1x" />
              </a>

              <a href="https://www.youtube.com/" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </a>

              <a href="https://www.twitter.com/" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>

              <a href="https://www.gmail.com/" className="google social">
                <FontAwesomeIcon icon={faGoogle} size="1x" />
              </a>

              <span>
                Starting at <b>$70</b>
              </span>
              <Rating icon={<FavoriteIcon />} max={1}></Rating>
            </Stack>
          </Paper>
          <Typography
            variant="h5"
            width="300px"
            sx={{
              fontFamily: "Nunito",
              marginTop: 1,
            }}
          ></Typography>
          <br></br>
        </Stack>

        <Stack>
          <Carousel>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-psd/various-music-advertising-template-psd-poster-set_53876-145284.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-psd/textured-wall-logo-effect-design_23-2149240554.jpg?size=626&ext=jpg&ga=GA1.2.356087201.1665257753') ",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>

            <Card
              sx={{
                background:
                  "url('https://img.freepik.com/free-vector/mobile-social-application-ui-design-concept-flat_1284-45235.jpg?size=338&ext=jpg&ga=GA1.2.356087201.1665257753')",
                backgroundSize: "cover",
                width: 350,
                height: 200,
              }}
            ></Card>
          </Carousel>
          <Paper
            sx={{
              width: 350,
              height: 150,
            }}
          >
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            >
              <Avatar alt="Maxwell" sx={{ bgcolor: "primary.light" }}>
                JO
              </Avatar>
              <Typography sx={{ marginTop: 1, marginLeft: 0.4 }}>
                Jane Ova
              </Typography>
            </Badge>
            <Box
              sx={{
                "&:hover": { color: "red" },
              }}
            >
              I will design your creative website layout editable in xd and PSD
              <div>
                <Rating precision={0.5} value={3} readOnly />
              </div>
            </Box>
          </Paper>

          <Paper>
            <Stack direction="row" spacing={2}>
              <a
                href="http://www.whatsapp.com/Brogrammers</Box>"
                className="whatsApp icon"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="1x" />
              </a>

              <a href="https://www.youtube.com/" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="1x" />
              </a>

              <a href="https://www.twitter.com/" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="1x" />
              </a>

              <a href="https://www.gmail.com/" className="google social">
                <FontAwesomeIcon icon={faGoogle} size="1x" />
              </a>

              <span>
                Starting at <b>$270</b>
              </span>
              <Rating icon={<FavoriteIcon />} max={1}></Rating>
            </Stack>
          </Paper>
          <Typography
            variant="h5"
            width="300px"
            sx={{
              fontFamily: "Nunito",
              marginTop: 1,
            }}
          ></Typography>
          <br></br>
        </Stack>
      </Stack>
    </div>
  );
};
export default WebbyCards;
