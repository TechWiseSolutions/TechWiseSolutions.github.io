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
        paddingTop: "60px",
        paddingBottom: "60px",
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
                marginBottom: "30px",
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
                TechWise Solutions is a leading technology company dedicated to
                providing innovative solutions for businesses. With our
                expertise in IT infrastructure, business intelligence, and
                cybersecurity, we help organizations optimize their operations,
                enhance their decision-making processes, and secure their
                digital assets.
              </Typography>
              <Typography
                variant="body1"
                style={{ color: "#333333", marginBottom: "20px" }}
              >
                Our team of experts is passionate about leveraging technology to
                drive success for our clients. We combine technical excellence
                with a deep understanding of business needs to deliver tailored
                solutions that empower organizations to achieve their goals and
                stay ahead in today's competitive landscape.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
