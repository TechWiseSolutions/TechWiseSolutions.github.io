import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

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
              }}
            >
              {/* Testimonial content */}
              <img src="https://via.placeholder.com/150" alt="Avatar" />

              <Typography variant="body1" color="white" gutterBottom>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                aliquam tincidunt odio id tristique. Nulla id lacus consequat,
                commodo urna non, laoreet erat. Fusce eu volutpat sem, at
                eleifend mi. Curabitur vitae eros nunc. Phasellus ac mi feugiat,
                fermentum lacus id, placerat mi."
              </Typography>
              <Typography variant="h6" color="white">
                John Doe
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                CEO, Example Company
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
              }}
            >
              {/* Testimonial content */}
              <img src="https://via.placeholder.com/150" alt="Avatar" />
              <Typography variant="body1" color="white" gutterBottom>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                aliquam tincidunt odio id tristique. Nulla id lacus consequat,
                commodo urna non, laoreet erat. Fusce eu volutpat sem, at
                eleifend mi. Curabitur vitae eros nunc. Phasellus ac mi feugiat,
                fermentum lacus id, placerat mi."
              </Typography>
              <Typography variant="h6" color="white">
                Jane Smith
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                CTO, Example Company
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
