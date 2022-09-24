import React from "react";
import { Box, Stack, Card, Typography } from "@mui/material";

function GraphicDesignPageCards() {
  return (
    <div>
      <Box>
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
              Logo Design
              <br />
              Brand Style Guides
              <br />
              Business Cards & Stationaries
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
              Image Editing <br /> Presentation Design <br /> Infographic Design{" "}
              <br /> Resume Design
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
              T-Shirts & Merchandise <br />
              Flyer Design <br /> Brochure Design
              <br /> Poster Design <br />
              Catalog Design <br />
              Menu Design <br />
              Invitation Design
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
              Packaging & Label Design <br />
              Book Design <br /> Laptop Stickers <br /> Album Cover <br /> Cover
              Art
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}

export default GraphicDesignPageCards;
