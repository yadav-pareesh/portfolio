import {
  Button,
  Grid,
  Box,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import developerImage from "../images/pareeshYadav.jpg";

const containerBoxStyles = {
  background: "#F2E5E5",
  p: 4,
};

const containerStyles = {
  my: 5,
  display: "flex",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
};

const socialLinks = [
  {
    variant: "text",
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/Pareesh.yadavji",
    name: "Facebook",
  },
  {
    variant: "text",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/pareeshyadav/",
    name: "Instagram",
  },
  {
    variant: "text",
    icon: <GitHubIcon />,
    link: "https://github.com/yadav-pareesh",
    name: "GitHub",
  },
  {
    variant: "text",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/pareesh-yadav-479953178/",
    name: "LinkedIn",
  },
];

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  console.log({
    name: data.get("name"),
    massage: data.get("massage"),
  });
};

const Footer = () => {
  return (
    <Box sx={{ ...containerBoxStyles }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ ...containerStyles }}
      >
        <Grid item xs={12} sm={4} columns={{ xs: 4, sm: 8, md: 12 }}>
          <img
            src={developerImage}
            alt="pareesh yadav"
            style={{ height: "200px", width: "200px", borderRadius: "100px" }}
          />
          <Typography variant="h6">Pareesh Yadav</Typography>
          <Typography> (Developer)</Typography>
        </Grid>
        <Grid item xs={12} sm={4} columns={{ xs: 4, sm: 12 }}>
          <Typography variant="h6">Media Links</Typography>
          <Stack
            direction="column"
            spacing={1}
            sx={{
              p: 6,
            }}
          >
            {socialLinks.map((socialLink) => (
              <Button
                key={socialLink.name}
                variant={socialLink.variant}
                startIcon={socialLink.icon}
                href={socialLink.link}
              >
                {socialLink.name}
              </Button>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Typography variant="h6">Leave Your Valuable Feedback</Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ m: "auto", p: 4, maxWidth: "30rem" }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              type="text"
              size="small"
            />
            <TextField
              margin="normal"
              fullWidth
              multiline
              maxRows={3}
              name="massage"
              label="Leave Your Massage"
              type="text"
              id="massage"
              size="small"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>{" "}
      {"Copyright © "}
      <Link color="inherit" href="#">
        PAREESH YADAV
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Box>
  );
};
export default Footer;