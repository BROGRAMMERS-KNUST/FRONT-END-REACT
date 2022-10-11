import { Button, Tab, Typography } from "@mui/material";
import React from "react";
import { Box, Container, Stack, Card, Link } from "@mui/material";
import Albert from "../../images/Team/Albert.jpg";
import Kusi from "../../images/Team/Kusi.jpg";
import Timothy from "../../images/Team/Timothy.jpg";
import Barnes from "../../images/Team/Barnes.jpg";
import NBA from "../../images/Team/NBA.jpg";
import { ChevronRight, GitHub, Telegram, WhatsApp } from "@mui/icons-material";

const BoxThree = () => {
  return (
    <div>
      <Box
        bgcolor="#4682B4"
        sx={{
          color: "white",
          padding: "15px",
        }}
      >
        <Container>
          <Typography marginTop={10} variant="h3" fontWeight="bold">
            Team
          </Typography>
          <Typography
            variant="body1"
            marginTop={1}
            borderBottom="solid #F5F5F5"
            paddingBottom={5}
          >
            StuLancer is maintained by a group of invaluable core contributors
            <br />
            <br />
            <Button
              variant="contained"
              endIcon={<ChevronRight />}
              color="secondary"
            >
              See Individual Roles
            </Button>
          </Typography>
        </Container>

        {/* ALBERT'S STACK */}

        <Stack marginLeft={10} direction="row" sx={{ flexWrap: "wrap" }}>
          <Stack sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Albert})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />

            <Typography variant="h6" color="secondary">
              Albert Asare-Appiah
            </Typography>

            <Typography variant="body1">
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
            <Stack direction="row" spacing={1}>
              <Link
                variant="inherit"
                color="secondary"
                target="_blank"
                rel="noopener"
                href="https://github.com/ahlbherto"
              >
                {<GitHub />}
              </Link>
              <Link
                variant="inherit"
                color="secondary"
                target="_blank"
                rel="noopener"
                href="https://wa.me/0242764001"
              >
                {<WhatsApp />}
              </Link>
              <Link
                variant="inherit"
                color="secondary"
                target="_blank"
                rel="noopener"
                href="https://t.me/ahlbherto"
              >
                {<Telegram />}
              </Link>
            </Stack>
          </Stack>

          {/* WASSEM'S STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Albert})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography variant="h6" color="secondary">
              Wassem
            </Typography>
            <Typography variant="body1">
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
          </Stack>

          {/* TIMOTHY'S STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Timothy})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography variant="h6" color="secondary">
              Timothy Mawuli
            </Typography>
            <Typography variant="body1">
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
          </Stack>

          {/* MAXWELL'S STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Albert})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography variant="h6" color="secondary">
              Maxwell
            </Typography>
            <Typography variant="body1">
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
          </Stack>

          {/* KUSI'S STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Kusi})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography variant="h6" color="secondary">
              Lord Kusi
            </Typography>
            <Typography variant="body1">
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
          </Stack>

          {/* BARNES' STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Barnes})`,
                backgroundSize: "cover",

                width: 200,
                height: 150,
              }}
            />
            <Typography variant="h6" color="secondary">
              Barnes
            </Typography>
            <Typography variant="body1">
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
          </Stack>

          {/* MOSES'S STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Albert})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography variant="h6" color="secondary">
              Moses
            </Typography>
            <Typography variant="body1">
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
          </Stack>

          {/* WALLACE'S STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Albert})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography variant="h6" color="secondary">
              Edwin Ofori
            </Typography>
            <Typography variant="body1">
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
          </Stack>

          {/* NBA'S STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${NBA})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography variant="h6" color="secondary">
              Nana Baffour Awuah
            </Typography>
            <Typography variant="body1">
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
          </Stack>

          {/* KINGSLEY'S STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Albert})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography variant="h6" color="secondary">
              Kinglsey
            </Typography>
            <Typography variant="body1">
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
          </Stack>

          {/* CARMINE'S STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Albert})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography variant="h6" color="secondary">
              Emmanuel Twum Larbi
            </Typography>
            <Typography variant="body1">
              A third year Computer Enginering student and an aspiring software
              engineer
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default BoxThree;
