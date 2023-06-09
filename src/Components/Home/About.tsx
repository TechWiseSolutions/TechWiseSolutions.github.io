import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import about_img from "../../images/about-transformed.jpeg";

export default function About() {
  return (
    <section
      style={{
        paddingTop: "40px",
        paddingBottom: "40px",
        backgroundColor: "#003269",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              component="h2"
              style={{
                color: "white",
                fontWeight: "bold",
                marginBottom: "20px",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              }}
            >
              About Us
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={about_img}
              alt="About Image"
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              style={{
                backgroundColor: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                padding: "24px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="body1"
                style={{ color: "#333333", marginBottom: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tristique, urna ut tincidunt malesuada, odio metus sollicitudin
                mauris, ac dictum leo risus ut justo.
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "#333333", marginBottom: "20px" }}
              >
                Mauris eu enim a nibh cursus feugiat non vitae ex. Fusce
                suscipit, arcu sit amet vulputate posuere, massa neque dignissim
                leo, sed auctor risus metus a ante.
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "#333333", marginBottom: "20px" }}
              >
                Aliquam cursus, odio sed pulvinar malesuada, orci elit imperdiet
                sem, sit amet molestie sapien arcu in libero. Phasellus euismod
                aliquam tincidunt.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
