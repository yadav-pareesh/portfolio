import * as React from "react";
import { Box, Typography, Grid, Avatar } from "@mui/material";
import bootsTrapLogo from "../images/bootsTrapLogo.png";
import reactJsLogo from "../images/reactJsLogo.png";
import sqlLogo from "../images/sqlLogo.svg";
import javaScriptLogo from "../images/javaScriptLogo.png";
import reduxLogo from "../images/reduxLogo.png";
import muiLogo from "../images/muiLogo.png";
import htmlLogo from "../images/htmlLogo.png";
import cssLogo from "../images/cssLogo.png";
import cLogo from "../images/cLogo.png";
import phpLogo from "../images/phpLogo.png";
import vercelLogo from "../images/vercelLogo.png";
import gitHubLogo from "../images/gitHubLogo.png";

const skills = [
  {
    id: 1,
    name: "React Js",
    logo: reactJsLogo,
    alt: "React js",
  },
  {
    id: 2,
    name: "JavaScript",
    logo: javaScriptLogo,
    alt: "javaScript",
  },
  {
    id: 3,
    name: "MUI",
    logo: muiLogo,
    alt: "mui",
  },
  {
    id: 4,
    name: "Redux",
    logo: reduxLogo,
    alt: "redux",
  },
  {
    id: 5,
    name: "SQL",
    logo: sqlLogo,
    alt: "SQL",
  },
  {
    id: 6,
    name: "BootsTrap",
    logo: bootsTrapLogo,
    alt: "bootsTrap",
  },
  {
    id: 7,
    name: "HTML 5",
    logo: htmlLogo,
    alt: "html",
  },
  {
    id: 8,
    name: "CSS",
    logo: cssLogo,
    alt: "css",
  },
  {
    id: 9,
    name: "C Programming",
    logo: cLogo,
    alt: "c programming",
  },
  {
    id: 10,
    name: "PHP",
    logo: phpLogo,
    alt: "php",
  },
  {
    id: 11,
    name: "GitHub",
    logo: gitHubLogo,
    alt: "github",
  },
  {
    id: 12,
    name: "Vecel",
    logo: vercelLogo,
    alt: "vercel",
  },
];

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1, my: 8 }}>
      <Typography variant="h4" sx={{ my: 5 }}>
        Familier with following technologies...
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        columns={{ xs: 4, sm: 4, md: 12 }}
      >
        {skills.map((skill) => (
          <Grid
            item
            xs={4}
            sm={2}
            md={4}
            key={skill.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              my: 3,
            }}
          >
            <Avatar
              alt={skill.alt}
              src={skill.logo}
              sx={{
                width: 100,
                height: 100,
                borderRadius: 4,
                alignSelf: "center",
              }}
            />
            <Typography>{skill.name}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Home;
