import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import { Projects } from "../pages/Projects";
const drawerWidth = 240;
const navItems = ["home", "projects", "about", "contact"];

const NavBar = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src="https://scontent.fbom19-1.fna.fbcdn.net/v/t1.6435-9/104170622_892097661259588_3668544582747682168_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=19026a&_nc_ohc=eY5fSlb_OZwAX8AfDvz&tn=nn9ZjuXw56rPbWPF&_nc_ht=scontent.fbom19-1.fna&oh=00_AfAYalu_dldS2xaSwuviccu2DqSj6y1Bqhhl8h17gSUbLw&oe=63B7A523"
        alt="developer logo"
        style={{ height: "100px", width: "100px", borderRadius: "50px" }}
      />
      <Divider />
      <Typography variant="h6" sx={{ my: 2 }}>
        PAREESH YADAV
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={item} to={"/" + item} sx={{ textDecoration: "none" }}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "block" } }}
          >
            <img
              src="https://scontent.fbom19-1.fna.fbcdn.net/v/t1.6435-9/104170622_892097661259588_3668544582747682168_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=19026a&_nc_ohc=eY5fSlb_OZwAX8AfDvz&tn=nn9ZjuXw56rPbWPF&_nc_ht=scontent.fbom19-1.fna&oh=00_AfAYalu_dldS2xaSwuviccu2DqSj6y1Bqhhl8h17gSUbLw&oe=63B7A523"
              alt="devloper logo"
              style={{ height: "40px", width: "40px", borderRadius: "20px" }}
            />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            PAREESH YADAV
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                <Link
                  style={{ color: "#fff", textDecoration: "none" }}
                  to={"/" + item}
                >
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ pt: 8 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Box>
    </Box>
  );
};

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
