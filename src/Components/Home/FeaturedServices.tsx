import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import service_1_img from "../../images/it-infrastructure-services-1.png";
import service_2_img from "../../images/cybersecurity-service.webp";
import services_background from "../../images/featured_serv_background.jpg";

export default function FeaturedServices() {
  return (
    <section
      style={{
        background: `url(${services_background})`,
        backgroundSize: "cover", // Add this line
        backgroundRepeat: "no-repeat", // Add this line
        paddingTop: "12px",
        paddingBottom: "12px",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            padding: "40px",
            textAlign: "center",
            color: "white",
          }}
        >
          <Typography variant="h2" color="white" gutterBottom>
            Featured Services
          </Typography>
        </Box>
        <Grid container spacing={2} sx={{ marginTop: "40px" }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%" }}>
              <img
                src={service_1_img}
                style={{ width: "100%", height: "60%" }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  IT Infrastructure Services
                </Typography>
                <Typography variant="body1">
                  Our IT Infrastructure Services provide comprehensive solutions
                  for your organization's technology needs. We offer network
                  design and implementation, server setup and maintenance, cloud
                  computing solutions, and IT support services.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: "100%" }}>
              <img
                src={service_2_img}
                alt="Service Image 2"
                style={{ width: "100%", height: "60%" }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  CyberSecurity
                </Typography>
                <Typography variant="body1">
                  Protect your business from cyber threats with our
                  CyberSecurity services. We offer comprehensive solutions to
                  safeguard your digital assets and data from unauthorized
                  access, malware, and other cyber attacks.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
