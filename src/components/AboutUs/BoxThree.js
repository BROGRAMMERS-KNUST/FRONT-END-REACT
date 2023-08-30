import React from "react";
import { Box, Container, Stack, Card, Link, Typography } from "@mui/material";
import Albert from "../../images/Team/Albert.jpg";
import EMMA from "../../images/Team/EMMA.jpg";
import Barden from "../../images/Team2/Barden.jpg";
import Obed from "../../images/Team2/Obed.jpg";
import Turkson from "../../images/Team2/Turkson.jpg";
import Emkhayy from "../../images/Team2/Emkhayy.jpg";
import Enoch from "../../images/Team2/Enoch.jpg";
// import Kusi from '../../images/Team/Kusi.jpg';
// import Timothy from '../../images/Team/Timothy.jpg';
// import Barnes from '../../images/Team/Barnes.jpg';
// import NBA from '../../images/Team/NBA.jpg';
// import Wallace from '../../images/Team/Wallace.jpg';
// import Wassem from '../../images/Team/Wassem-Darkwa.jpg';
// import King from '../../images/Team/King.jpg';
// import Moses from '../../images/Team/Moses.jpg';
// import Maxwell from '../../images/Team/MAXWELL.jpg';
import { GitHub, Telegram, WhatsApp, Twitter } from "@mui/icons-material";
import pattern from "../../images/TribalPattern10.jpg";
const BoxThree = () => {
  return (
    <div>
      <Box
        sx={{
          color: "white",
          padding: "15px",
          paddingLeft: 4.5,
          backgroundImage: `url(${pattern})`,
        }}
        bgcolor="#4682B4"
      >
        <Container sx={{ marginLeft: 13.8 }}>
          <Typography
            sx={{
              fontFamily: "Nunito",
              fontWeight: "700",
            }}
            marginTop={10}
            variant="h3"
            fontWeight="bold"
          >
            StuLancer Team
          </Typography>
          <Typography
            variant="body1"
            marginTop={1}
            borderBottom="solid 1px #F5F5F5"
            paddingBottom={2}
            sx={{
              fontFamily: "Nunito",
            }}
          >
            StuLancer is maintained by a group of invaluable core contributors
            <br />
            {/* <Button
              href="/about-us_individual-roles"
              variant="contained"
              endIcon={<ChevronRight />}
              color="secondary"
            >
              See Individual Roles
            </Button> */}
          </Typography>
        </Container>

        {/* ALBERT'S STACK */}

        <Stack marginLeft={14} direction="row" sx={{ flexWrap: "wrap" }}>
          <Stack sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Albert})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />

            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              variant="h6"
              color="secondary"
            >
              Albert Asare-Appiah
            </Typography>

            <Typography
              sx={{
                fontFamily: "Nunito",
              }}
              variant="body1"
            >
              A full stack developer and lead developer.
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
                background: `url(${Barden})`,
                backgroundSize: "100% 100%",
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              variant="h6"
              color="secondary"
            >
              Barden Daniel Akyeampong
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito",
              }}
              variant="body1"
            >
              Backend developer and a database administrator
            </Typography>
            <Stack direction="row" spacing={1}>
              <Link
                variant="inherit"
                color="secondary"
                target="_blank"
                rel="noopener"
                href="https://github.com/wassem7"
              >
                {<GitHub />}
              </Link>

              <Link
                variant="inherit"
                color="secondary"
                target="_blank"
                rel="noopener"
                href="https://t.me/Wdarkwa"
              >
                {<Telegram />}
              </Link>
            </Stack>
          </Stack>

          {/* TIMOTHY'S STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Obed})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              variant="h6"
              color="secondary"
            >
              Effum Obed Kwabena
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito",
              }}
              variant="body1"
            >
              Front-end Web Developer
            </Typography>
            <Stack direction="row" spacing={1}>
              <Link
                variant="inherit"
                color="secondary"
                target="_blank"
                rel="noopener"
                href="https://github.com/Tmawuli"
              >
                {<GitHub />}
              </Link>
              <Link
                variant="inherit"
                color="secondary"
                target="_blank"
                rel="noopener"
                href="https://wa.me/0548632081"
              >
                {<WhatsApp />}
              </Link>
              <Link
                variant="inherit"
                color="secondary"
                target="_blank"
                rel="noopener"
                href="https://t.me/Juju666"
              >
                {<Telegram />}
              </Link>
            </Stack>
          </Stack>

          {/* MAXWELL'S STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Turkson})`,
                backgroundPositionY: -20,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              variant="h6"
              color="secondary"
            >
              Emmanuel Turkson
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito",
              }}
              variant="body1"
            >
              Frontend developer. Driven to learn and explore new adventures
            </Typography>
          </Stack>

          {/* KUSI'S STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Emkhayy})`,
                backgroundSize: "100% 100%",
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              variant="h6"
              color="secondary"
            >
              Kuai Emmanuel
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito",
              }}
              variant="body1"
            >
              Quality Assurance Specialist and Backend engineer.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Link
                variant="inherit"
                color="secondary"
                target="_blank"
                rel="noopener"
                href="https://kwame_kusi.t.me/"
              >
                {<Telegram />}
              </Link>

              <Link
                variant="inherit"
                color="secondary"
                target="_blank"
                rel="noopener"
                href="https://twitter.com/lord_k_k"
              >
                {<Twitter />}
              </Link>
            </Stack>
          </Stack>

          {/* BARNES' STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Enoch})`,
                backgroundSize: "100% 100%",

                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              variant="h6"
              color="secondary"
            >
              Opoku-Sarkodie Enoch
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito",
              }}
              variant="body1"
            >
              Passionate and innovative. Backend developer
            </Typography>
          </Stack>

          {/* MOSES'S STACK */}

          {/* <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Moses})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              variant="h6"
              color="secondary"
            >
              Moses
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito",
              }}
              variant="body1"
            >
              Computer Enginering student at KNUST
            </Typography>
          </Stack> */}

          {/* WALLACE'S STACK */}

          {/* <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${Wallace})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              variant="h6"
              color="secondary"
            >
              Edwin Ofori
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito",
              }}
              variant="body1"
            >
              IT enthusiast looking to better the world through the field of IoT
            </Typography>
          </Stack> */}

          {/* NBA'S STACK */}

          {/* <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${NBA})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              variant="h6"
              color="secondary"
            >
              Nana Baffour Awuah
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito",
              }}
              variant="body1"
            >
              Computer Geek 👩‍💻
            </Typography>
          </Stack> */}

          {/* KINGSLEY'S STACK */}

          {/* <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${King})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              variant="h6"
              color="secondary"
            >
              Kinglsey
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito",
              }}
              variant="body1"
            >
              I ♥ writing code. I love computers and building things. I enjoy
              playing the guitar
            </Typography>
          </Stack> */}

          {/* CARMINE'S STACK */}

          <Stack direction="column" sx={{ width: 200, margin: 2 }}>
            <Card
              sx={{
                background: `url(${EMMA})`,
                backgroundSize: "cover",
                width: 200,
                height: 150,
              }}
            />
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontWeight: "700",
              }}
              fontSize={18.3}
              color="secondary"
            >
              Emmanuel Twum Larbi
            </Typography>
            <Typography
              sx={{
                fontFamily: "Nunito",
              }}
              variant="body1"
            >
              Hey there! I dabble in games-related software engineeering. I am
              the guy to call if there is an arcade tournament
            </Typography>
            <Stack direction="row" spacing={1}>
              <Link
                variant="inherit"
                color="secondary"
                target="_blank"
                rel="noopener"
                href="https://github.com/Carmpeli"
              >
                {<GitHub />}
              </Link>

              <Link
                variant="inherit"
                color="secondary"
                target="_blank"
                rel="noopener"
                href="https://t.me/C_rmine"
              >
                {<Telegram />}
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default BoxThree;
