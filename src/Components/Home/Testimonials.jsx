import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import testimonial1 from "../../images/testimonial1.jpeg";
import testimonial2 from "../../images/testimonial2.jpg";

export default function Testimonials() {
  return (
    <section
      style={{
        paddingTop: "12px",
        paddingBottom: "12px",
        backgroundColor: "#003269",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h2" align="center" color="white" gutterBottom>
          Testimonials
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#B59410",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                height: "100%", // Set full height for the container
                display: "flex", // Ensure flexbox layout
                flexDirection: "column", // Stack elements vertically
              }}
            >
              <img
                src={testimonial1}
                alt="Avatar"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover", // Ensure the image covers the entire container
                  marginBottom: "20px", // Add some bottom margin to separate the image from the text
                }}
              />

              <Typography variant="body1" color="white" gutterBottom>
                "TechWise Solutions has been instrumental in transforming our
                business operations. Their expertise in technology consulting
                and solutions has helped us streamline processes and improve
                efficiency. We highly recommend their services!"
              </Typography>
              <Typography variant="h6" color="white">
                Felix Smith
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                CEO, Auditte.io
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#B59410",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                height: "100%", // Set full height for the container
                display: "flex", // Ensure flexbox layout
                flexDirection: "column", // Stack elements vertically
              }}
            >
              <img
                src={testimonial2}
                alt="Avatar"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover", // Ensure the image covers the entire container
                  marginBottom: "20px", // Add some bottom margin to separate the image from the text
                }}
              />
              <Typography variant="body1" color="white" gutterBottom>
                "TechWise Solutions has exceeded our expectations with their
                innovative solutions and exceptional customer service. Their
                team is highly skilled and dedicated. We are grateful for their
                support in driving our business growth."
              </Typography>
              <Typography variant="h6" color="white">
                Lauren Pecker
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                CTO, Ritalio
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
