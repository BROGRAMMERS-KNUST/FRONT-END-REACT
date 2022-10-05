import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import ImageIcon from "@mui/icons-material/Image";
import InstagramIcon from '@mui/icons-material/Instagram';
import LaptopIcon from '@mui/icons-material/Laptop';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BrushIcon from '@mui/icons-material/Brush';

function GraphicDesignPageCards() {
  return (
    <div>
      <Box marginLeft={1}>
        <Box
          sx={{
            background: "#0D4114",
            color: "white",
            height: "200px",
            width: "95vw",
            borderRadius: "10px",
            marginTop: 3,
            margin: "auto",
            marginBottom: 5,
            marginLeft: 0,
          }}
        >
          <Typography
            align="center"
            variant="h4"
            paddingTop={3}
            fontFamily={"Nunito"}
          >
            Graphics & Design
          </Typography>
          <Typography align="center" fontFamily={"Nunito"}>
            Design to make you standout
            <br />
            <br />
            <Button style={{ margin: "auto" }} variant="contained">
              {" "}
              How Stulancer Works
            </Button>
          </Typography>
        </Box>
         <Typography fontWeight= 'medium'> Most popular in Graphics & Design</Typography> <br/>
        <Stack  direction="row" spacing={4} sx={{ flexWrap: "nowrap" }}>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: "12vw",
            }}
          >
            <ImageIcon color="primary" /> Image Editing
          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: "14vw",
            }}
          >
            <InstagramIcon color="primary" /> Social Media Design
          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: "10vw",
            }}
          >
            <BrushIcon color="primary"/> Logo Design
          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: "12vw",
            }}
          >
            <LaptopIcon color="primary"/> Laptop Stickers
          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: "15vw",
            }}
          >
            <HowToRegIcon color="primary"/> T-shirt & Merchandise
          </Box>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 2,
              p: 2,
              width: "9vw",
            }}
          >
            <ColorLensIcon color="primary" /> Cover Art
          </Box>
        </Stack>
        <br />
        <Typography variant="h5" fontWeight="medium">
        Explore Graphics & Design
      </Typography>
        <Stack direction="row" spacing={4} sx={{ flexWrap: "nowrap" }}>
          <Stack>
            <Card
              sx={{
                background:
                  "url('https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600') ",
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
              Logo and Brand Identity
            </Typography>
            <Typography variant="body" width="300px">
            <Button sx={{ color: "black" }}>Logo Maker</Button>
              <br />
              <Button sx={{ color: "black" }}>Brand Style Guides</Button>
              <br />
              <Button sx={{ color: "black" }}>Logo Design</Button>
              <br />
              <Button sx={{ color: "black" }}>Business Cards & Stationaries</Button>
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
              <Button sx={{ color: "black" }}>Image Editing</Button> <br />{" "}
              <Button sx={{ color: "black" }}>Presentation Design</Button> <br />{" "}
              <Button sx={{ color: "black" }}>Infographic Design </Button>
              <br /> <Button sx={{ color: "black" }}>Resume Design</Button>
            </Typography>
          </Stack>

          <Stack>
            <Card
              sx={{
                background:
                  "url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/75513a77da804a4b04cf63c5231e5fe2-1627366825531/print_design_2x.png') ",
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
              Print Design
            </Typography>
            <Typography variant="body" width="300px">
              <Button sx={{ color: "black" }}>T-Shirts & Merchandise</Button> <br />
              <Button sx={{ color: "black" }}>Flyer Design</Button> <br />{" "}
              <Button sx={{ color: "black" }}>Brochure Design </Button>
              <br /> <Button sx={{ color: "black" }}>Poster Design</Button> <br />           
              <Button sx={{ color: "black" }}>Menu Design</Button>
              <br />
              <Button sx={{ color: "black" }}>Invitation Design</Button>
            </Typography>
          </Stack>

          <Stack>
            <Card
              sx={{
                background:
                  "url('https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/fa22b92aed2d9e4e17b63c7af717aa24-1626178498470/Packaging_Labels_2x.png') ",
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
              Packaging & Covers
            </Typography>
            <Typography variant="body" width="300px">
              <Button sx={{ color: "black" }}>Packaging & Label Design </Button> <br />
              <Button sx={{ color: "black" }}>Book Design</Button> <br />{" "}
              <Button sx={{ color: "black" }}>Laptop Stickers</Button> <br />{" "}
              <Button sx={{ color: "black" }}>Album Cover </Button>
              <br /> <Button sx={{ color: "black" }}>Menu Design</Button> <br />{" "}
              <Button sx={{ color: "black" }}>Cover Art</Button>
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
              <Button sx={{ color: "black" }}>Game Art </Button> <br />{" "}
              <Button sx={{ color: "black" }}>Infographic Design </Button>
              <br /> <Button sx={{ color: "black" }}>Social Media Design</Button>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}

export default GraphicDesignPageCards;
