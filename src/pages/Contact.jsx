import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import ResponsiveAppBar from "../Components/Common/ResponsiveAppBar";
import Hero from "../Components/Common/Hero";
import locationImage from "../images/locationImage.png";
import contactImage from "../images/contact.jpeg";

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [formValues, setFormValues] = useState({
    formValues: { fullName: "", email: "", company: "", message: "" },
  });
  const [formErrors, setFormErrors] = useState({
    formErrors: { fullName: "", email: "", company: "", message: "" },
  });
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = () => {
    const { fullName, email, company, message } = formValues;

    if (fullName && email && company && message) {
      // Reset form errors
      setFormErrors({
        fullName: false,
        email: false,
        company: false,
        message: false,
      });

      // Logic for form submission
      setOpenSnackbar(true);
      setIsButtonClicked(true);
    } else {
      // Display form error messages
      setFormErrors({
        fullName: fullName ? false : "Please enter your full name",
        email: email ? false : "Please enter a valid email",
        company: company ? false : "Please enter your company",
        message: message ? false : "Please enter your message",
      });

      setOpenSnackbar(true); // Show snackbar with error message
      setIsButtonClicked(false);
    }
  };

  const handleFormChange = (event) => {
    const { id, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <div>
      <div>
        <ResponsiveAppBar />
      </div>
      <div>
        <Hero
          title="Contact Us"
          description="Get in touch with us"
          backgroundImage={contactImage}
        />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                width: "80%",
                margin: "auto",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Contact Information
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <PhoneIcon sx={{ marginRight: "10px" }} />
                  <Typography variant="body1">Phone: 123-456-7890</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <EmailIcon sx={{ marginRight: "10px" }} />
                  <Typography variant="body1">
                    Email: example@example.com
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <AccessTimeIcon sx={{ marginRight: "10px" }} />
                  <Typography variant="body1">
                    Business Hours: Monday-Friday, 9AM-5PM
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <RoomIcon sx={{ marginRight: "10px" }} />
                  <Typography variant="body1">
                    Location: University of Ottawa, Ottawa, Canada
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                marginLeft: "10%",
                marginRight: "10%",
                marginBottom: "10%",
                height: "50%",
              }}
            >
              <img
                src={locationImage}
                alt="Location"
                style={{ width: "90%", height: "90%", borderRadius: "4px" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                marginRight: "10%",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  Contact Form
                </Typography>
                <Box sx={{ marginTop: "20px" }}>
                  <TextField
                    id="fullName"
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formValues.fullName}
                    onChange={handleFormChange}
                    error={!!formErrors.fullName}
                    helperText={
                      formErrors.fullName ? "Full Name is required" : ""
                    }
                  />
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formValues.email}
                    onChange={handleFormChange}
                    error={!!formErrors.email}
                    helperText={formErrors.email ? "Email is required" : ""}
                  />
                  <TextField
                    id="company"
                    label="Company"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={formValues.company}
                    onChange={handleFormChange}
                    error={!!formErrors.company}
                    helperText={formErrors.company ? "Company is required" : ""}
                  />
                  <TextField
                    id="message"
                    label="How can we help you?"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                    value={formValues.message}
                    onChange={handleFormChange}
                    error={!!formErrors.message}
                    helperText={formErrors.message ? "Message is required" : ""}
                  />
                  <Button
                    variant="contained"
                    color={isButtonClicked ? "success" : "primary"}
                    size="large"
                    fullWidth
                    sx={{ marginTop: "20px" }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        sx={{
          width: "90%",
          left: 0,
          bottom: 0,
          marginBottom: "20px",
          borderRadius: "4px",
        }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={isButtonClicked ? "success" : "error"}
          sx={{ width: "100%", borderRadius: "4px" }}
        >
          {isButtonClicked
            ? "Form submitted successfully"
            : "Form submission failed"}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Contact;
