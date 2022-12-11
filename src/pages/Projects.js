import * as React from "react";
import todoImage from "../images/todo_app.png";
import portfolioImage from "../images/portfolioProject.png";
import paytmImage from "../images/paytmImage.png";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

const cards = [
  {
    id: 1,
    heading: "Todo App",
    title:
      "This is TODO APP. In which CRUD operation performed using Redux Store and MUI",
    image: todoImage,
    alt: "Todo for Tasks",
    link: "https://my-todo-nine.vercel.app/",
  },
  {
    id: 2,
    heading: "Paytm Clone(UI)",
    title:
      "This is UI based Paytm Clone react website. Which is creted using MUI and React Components.",
    image: paytmImage,
    alt: "Paytm clone site",
    link: "https://paytm-clone-tawny.vercel.app/",
  },
  {
    id: 3,
    heading: "Portfolio Project",
    title:
      "This is Portfolio site for for testing purpose only. In which React and MUI technologies are used",
    image: portfolioImage,
    alt: "Portfolio site",
    link: "https://portfolio-project-sandy.vercel.app/",
  },
  {
    id: 4,
    heading: "Todo App",
    title:
      "This is TODO APP. In which CRUD operation performed using Redux Store and MUI",
    image: todoImage,
    alt: "Todo for Tasks",
    link: "https://my-todo-nine.vercel.app/",
  },
  {
    id: 5,
    heading: "Paytm Clone(UI)",
    title:
      "This is UI based Paytm Clone react website. Which is creted using MUI and React Components.",
    image: paytmImage,
    alt: "Paytm clone site",
    link: "https://paytm-clone-tawny.vercel.app/",
  },
  {
    id: 6,
    heading: "Portfolio Project",
    title:
      "This is Portfolio site for for testing purpose only. In which React and MUI technologies are used",
    image: portfolioImage,
    alt: "Portfolio site",
    link: "https://portfolio-project-sandy.vercel.app/",
  },
];

const borderStyles = {
  ml: 2,
  fontSize: "1.2rem",
};

export const Projects = () => {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            About Projects
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Hay buddy, check out these amazing projects made by me and suggest
            me to add something new. How much better can these projects be done?
            give me your valuable ideas
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 2 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4} sx={{ my: "5%" }}>
              <Card
                sx={{
                  background: "#e3e3e3",
                  borderRadius: "8px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia component="img" image={card.image} alt={card.alt} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.heading}
                  </Typography>
                  <Typography>{card.title}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    sx={{ ...borderStyles }}
                    size="small"
                    href={card.link}
                  >
                    Check
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
