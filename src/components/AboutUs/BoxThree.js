import { Button, Typography } from "@mui/material";
import React from "react";
import { Box, Container, Stack, Card, CardContent } from "@mui/material";
import Albert from "../../images/Team/Albert.jpg";
import Kusi from "../../images/Team/Kusi.jpg";
import Timothy from "../../images/Team/Timothy.jpg";
import Barnes from "../../images/Team/Barnes.jpg";
import NBA from "../../images/Team/NBA.jpg";
import { ChevronRight } from "@mui/icons-material";

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
          </Stack>
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
