import { React, useState, useEffect } from "react";
import {
  Avatar,
  Button,
  TextField,
  Box,
  Typography,
  Container,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";

const contactFields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
  },
  {
    name: "moibile",
    label: "Moibile",
    type: "number",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
  },
];

const ContactUs = () => {
  const [massage, setMassage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      email: data.get("email"),
      mobile: data.get("mobile"),
      company: data.get("company"),
    });
    setMassage(
      "Hay " +
        data.get("name") +
        ", your contact details is recieved, we will contact you sonn."
    );
  };
  useEffect(() => {
    setTimeout(() => {
      setMassage("");
    }, 10000);
  }, [massage]);

  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4" sx={{ my: 5 }}>
        Contact Details
      </Typography>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            <Typography sx={{ mb: 2 }} variant="h5">
              Email:
            </Typography>
            <Typography variant="h5" sx={{ mx: 4 }}>
              Mobile:
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>
              pareeshyadav@gmail.com
            </Typography>
            <Typography variant="h6">+91 6260229239</Typography>
          </Box>
        </Box>
      </Box>
      <Typography
        id="massage"
        variant="h5"
        sx={{ color: "green", m: 5 }}
        maxWidth="xs"
      >
        {massage}
      </Typography>

      <Box
        xs={12}
        sm={6}
        lg={6}
        sx={{
          mt: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#E8F3D6",
          borderRadius: 4,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <EmailIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Interact with us
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, mx: 2 }}
        >
          {contactFields.map((field) => (
            <TextField
              key={field.name}
              margin="normal"
              size="small"
              fullWidth
              label={field.label}
              type={field.type}
              name={field.name}
            />
          ))}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default ContactUs;
