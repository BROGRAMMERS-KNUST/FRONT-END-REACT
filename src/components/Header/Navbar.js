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
            textDecorationColor: "goldrod",
            textDecorationThickness: "3px",
          }}
        >
          GRAPHIC DESIGN
        </Link>
        <Link
          underline="hover"
          sx={{ fontFamily: "Nunito" }}
          style={{
            textDecorationColor: "gold",
            textDecorationThickness: "3px",
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
            textDecorationThickness: "3px",
          }}
        >
          PHOTOGRAPHY
        </Link>
        <Link
          underline="hover"
          sx={{ fontFamily: "Nunito" }}
          style={{
            textDecorationColor: "gold",
            textDecorationThickness: "3px",
          }}
        >
          LAUNDRY SERVICES
        </Link>

        <Link
          underline="hover"
          sx={{ fontFamily: "Nunito" }}
          style={{
            textDecorationColor: "gold",
            textDecorationThickness: "3px",
          }}
        >
          WRITING & TRANSLATION
        </Link>
      </Stack>
    </Box>
  );
}

export default Navbar;
