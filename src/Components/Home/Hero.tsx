import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import hero from "../../images/tech-consulting-services-1.jpg";

export default function Header() {
  const content = {
    "header-p1": "TechWise",
    "header-p2": "Solutions",
    description:
      "We are a team of highly skilled professionals with a passion for technology. We are committed to providing the best solutions for your business.",
    "primary-action": "Book Now",
    pattern: hero,
  };

  return (
    <section
      className="hero"
      style={{
        position: "relative",
        textAlign: "center",
        color: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "100px 0",
        backgroundImage: `url("${content["pattern"]}")`,
      }}
    >
      <Container maxWidth="md">
        <Box
          textAlign="center"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "20px",
            maxWidth: "600px",
            textAlign: "center",
            margin: "0 auto",
            position: "relative",
            top: "30%",
          }}
        >
          <Typography variant="h2" component="h2" gutterBottom>
            <Typography
              color="textSecondary"
              variant="h2"
              component="span"
              style={{ color: "#B59410" }}
            >
              {content["header-p1"]}{" "}
            </Typography>
            <Typography variant="h2" component="span">
              {content["header-p2"]}
            </Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography
              variant="subtitle1"
              color="white"
              paragraph
              style={{ marginTop: "24px" }}
            >
              {content["description"]}
            </Typography>
          </Container>
          <Box mt={3}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#B59410",
                color: "white",
              }}
            >
              {content["primary-action"]}
            </Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
