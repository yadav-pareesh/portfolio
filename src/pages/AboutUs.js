import { Box, Grid, Typography } from "@mui/material";
import CableIcon from "@mui/icons-material/Cable";
import GroupsIcon from "@mui/icons-material/Groups";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";

const iconStyles = {
  fontSize: "70px",
};

const gridStyles = {
  dispaly: "flex",
  background: "#F2E5E5",
  justifyContent: "center",
  boxShadow: 3,
};

const items = [
  {
    icon: <CableIcon color="disabled" sx={{ ...iconStyles }} />,
    title: "Costomer Relations",
    description:
      "I can make a better project and I am sure you will like it. I am looking for an opportunity from you under which I can prove myself. I am sure you are looking for better and may give you best project.",
  },
  {
    icon: <GroupsIcon color="disabled" sx={{ ...iconStyles }} />,
    title: "Team Members",
    description:
      " Content are writtern hereContent are writtern hereContent are writtern hereContent are writtern hereContent are writtern hereContent are writtern hereContent are writtern hereContent are writtern hereContent are writtern here",
  },
  {
    icon: <DeveloperModeIcon color="disabled" sx={{ ...iconStyles }} />,
    title: "Development",
    description:
      " Content are writtern hereContent are writtern hereContent are writtern hereContent are writtern hereContent are writtern hereContent are writtern hereContent are writtern hereContent are writtern hereContent are writtern here",
  },
  {
    icon: <AccessibilityNewIcon color="disabled" sx={{ ...iconStyles }} />,
    title: "Technologies",
    description: " Content are writtern here",
  },
];

const AboutUs = () => {
  return (
    <Box sx={{ my: 10 }}>
      <Typography component="h1" variant="h2" color="text.primary">
        Who I am?
      </Typography>

      <Typography
        variant="h5"
        align="center"
        color="text.secondary"
        paragraph
        sx={{ pb: 10, pt: 4 }}
      >
        This description gives all information about me...
      </Typography>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid
            key={item.title}
            item
            sm={5.02}
            xs={12}
            sx={{ ...gridStyles, m: 3 }}
          >
            {item.icon}
            <Grid sx={{ flexDirection: "column" }}>
              <Typography variant="h6" align="center">
                {item.title}
              </Typography>
              <Typography component="p" color="text.secondary" variant="p">
                {item.description}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default AboutUs;
