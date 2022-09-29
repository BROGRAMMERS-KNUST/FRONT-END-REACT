import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";

function GraphicDesignPageCards() {
  return (
    <div>
      <Box marginLeft="30px" marginRight="40px">
        <Box
          sx={{
            background: "#0D4114",
            color: "white",
            height: "200px",
            width: "1350px",
            borderRadius: "10px",
            marginTop: 3
            // padding:'16px',
          }}
        >
          <Typography align="center" variant="h4" paddingTop="15px" fontFamily={ "Nunito"}>
            Graphics & Design
          </Typography>
          <Typography align="center" fontFamily={ "Nunito"}>Design to make you standout</Typography>

          <Button
            style={{ marginTop: 25, marginLeft: 570 }}
            variant="contained"
          >
            {" "}
            How Stulancer Works
          </Button>
        </Box>
        <br />
        <Stack direction="row" spacing={6} sx={{ flexWrap: "wrap" }}>
          <Stack>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
                backgroundSize: "cover",
                width: "300px",
                height: 200,
              }}
            ></Card>
            <Typography
              variant="h5"
              width="300px"
              sx={{
                fontFamily: "Nunito",
                marginTop: 1,
              }}
            >
              Logo and Brand Identity
            </Typography>
            <Typography variant="body" width="300px">
              Stand out from the crowd with a logo that fits your business and
              ideas.
              <br />
              <Button variant="text">Brand Style Guides</Button>
              <br />
              <Button variant="text">Logo Design</Button>
              <br />
              <Button variant="text">Business Cards & Stationaries</Button>
              <br />
            </Typography>
          </Stack>

          <Stack>
            <Card
              sx={{
                background:
                  "url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/431c7d880582a199f5b240dde2694206-1626594004546/Visual%20Design_2x.png') ",
                backgroundSize: "cover",
                width: 300,
                height: 200,
              }}
            ></Card>
            <Typography
              variant="h5"
              width="300px"
              sx={{
                fontFamily: "Nunito",
                marginTop: 1,
              }}
            >
              Visual Design
            </Typography>
            <Typography variant="body" width="300px">
              <Button variant="text">Image Editing</Button> <br />{" "}
              <Button variant="text">Presentation Design</Button> <br />{" "}
              <Button variant="text">Infographic Design </Button>
              <br /> <Button variant="text">Resume Design</Button>
            </Typography>
          </Stack>

          <Stack>
            <Card
              sx={{
                background:
                  "url('https://imgs.search.brave.com/ZciqV_ZdFAB0hySTBTwf9Ki2WU8Czor17NrosD2FsYI/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/VjZUMXotVzRwS0FH/QWpBNWlMc3RnSGFI/YSZwaWQ9QXBp') ",
                backgroundSize: "cover",
                width: "300px",
                height: 200,
              }}
            ></Card>
            <Typography
              variant="h5"
              width="300px"
              sx={{
                fontFamily: "Nunito",
                marginTop: 1,
              }}
            >
              Print Design
            </Typography>
            <Typography variant="body" width="300px">
              <Button variant="text">T-Shirts & Merchandise</Button> <br />
              <Button variant="text">Flyer Design</Button> <br />{" "}
              <Button variant="text">Brochure Design </Button>
              <br /> <Button variant="text">Poster Design</Button> <br />
              <Button variant="text">Catalog Design </Button>
              <br />
              <Button variant="text">Menu Design</Button>
              <br />
              <Button variant="text">Invitation Design</Button>
            </Typography>
          </Stack>

          <Stack>
            <Card
              sx={{
                background:
                  "url('https://imgs.search.brave.com/JJ9EyQU-Cl35bIX79vpEhk4hFAYWG5Q3nnkLQibaq60/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/ZnlVa2oxR0xfNU1H/RndaZ2pHbmpRSGFI/YSZwaWQ9QXBp') ",
                backgroundSize: "cover",
                width: "300px",
                height: 200,
              }}
            ></Card>
            <Typography
              variant="h5"
              width="300px"
              sx={{
                fontFamily: "Nunito",
                marginTop: 1,
              }}
            >
              Packaging & Covers
            </Typography>
            <Typography variant="body" width="300px">
              <Button variant="text">Packaging & Label Design </Button> <br />
              <Button variant="text">Book Design</Button> <br />{" "}
              <Button variant="text">Laptop Stickers</Button> <br />{" "}
              <Button variant="text">Album Cover </Button>
              <br /> <Button variant="text">Menu Design</Button> <br />{" "}
              <Button variant="text">Cover Art</Button>
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={6} sx={{ flexWrap: "wrap" }}>
          <Stack>
            <Card
              sx={{
                background:
                  "url('https://cdn.dribbble.com/users/77598/screenshots/7958090/media/9dfda44bd1e8b288602cd465655e7a36.png?compress=1&resize=400x300') ",
                backgroundSize: "cover",
                width: 300,
                height: 200,
              }}
            ></Card>
            <Typography
              variant="h5"
              width="300px"
              sx={{
                fontFamily: "Nunito",
                marginTop: 1,
              }}
            >
              Miscellaneous
            </Typography>
            <Typography variant="body" width="300px">
              <Button variant="text">Logo Maker</Button> <br />{" "}
              <Button variant="text">Game Art </Button> <br />{" "}
              <Button variant="text">Infographic Design </Button>
              <br /> <Button variant="text">Social Media Design</Button>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}

export default GraphicDesignPageCards;
