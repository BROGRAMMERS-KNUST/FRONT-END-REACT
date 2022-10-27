import React from "react";
import { Stack, Box, Link } from "@mui/material";

function Navbar() {
  return (
    <Box
      sx={{
        boxShadow: "0px 1px 1px grey",
        marginTop: -2,
        paddingTop: 1,
        paddingLeft: 5,
        marginLeft: -5,
        marginRight: -5,
        paddingRight: 5,
        marginBottom: 2,
      }}
    >
      <Stack direction="row" spacing="auto">
        <Link
          href="/graphic-design"
          underline="hover"
          sx={{ fontFamily: "Nunito" }}
          style={{
            textDecorationColor: "gold",
            textDecorationThickness: "2px",
          }}
        >
          GRAPHIC DESIGN
        </Link>
        <Link
          href="/webdevelopment"
          underline="hover"
          sx={{ fontFamily: "Nunito" }}
          style={{
            textDecorationColor: "gold",
            textDecorationThickness: "2px",
          }}
        >
          WEB DEVELOPMENT
        </Link>
        <Link
          href="/photography"
          underline="hover"
          sx={{ fontFamily: "Nunito" }}
          style={{
            textDecorationColor: "gold",
            textDecorationThickness: "2px",
          }}
        >
          PHOTOGRAPHY
        </Link>
        <Link
          href="food-services"
          underline="hover"
          sx={{ fontFamily: "Nunito" }}
          style={{
            textDecorationColor: "gold",
            textDecorationThickness: "2px",
          }}
        >
          FOOD SERVICES
        </Link>

        <Link
          href="writing&translation"
          underline="hover"
          sx={{ fontFamily: "Nunito" }}
          style={{
            textDecorationColor: "gold",
            textDecorationThickness: "2px",
          }}
        >
          WRITING & TRANSLATION
        </Link>
      </Stack>
    </Box>
  );
}

export default Navbar;
