import React from "react";
import ResponsiveAppBar from "../../Components/Common/ResponsiveAppBar";
import Hero from "../../Components/Common/Hero";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import CybersecurityImage1 from "../../images/CybersecurityImage1.jpg";
import CybersecurityImage2 from "../../images/CybersecurityImage2.jpg";
import CybersecurityImage3 from "../../images/CybersecurityImage3.jpg";
import CybersecurityBg from "../../images/CybersecurityBg.jpg";

const services = [
  {
    title: "Vulnerability Assessment",
    price: "Starting from $999",
    description:
      "Identify and analyze vulnerabilities in your IT infrastructure, applications, and networks. Our experts will conduct thorough assessments, provide detailed reports, and recommend mitigation strategies to strengthen your security.",
    image: CybersecurityImage1,
  },
  {
    title: "Penetration Testing",
    price: "Starting from $1499",
    description:
      "Simulate real-world cyber attacks to evaluate the security posture of your systems and networks. Our certified penetration testers will identify vulnerabilities and provide recommendations to fortify your defenses.",
    image: CybersecurityImage2,
  },
  {
    title: "Security Incident Response",
    price: "Starting from $1999",
    description:
      "Prepare for and respond to security incidents effectively. Our incident response team will develop comprehensive plans, establish incident management processes, and assist in mitigating the impact of security breaches.",
    image: CybersecurityImage3,
  },
];

const CybersecurityService = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Hero
        title="Cybersecurity Services"
        description="Protect your business from cyber threats and secure your sensitive data"
        backgroundImage={CybersecurityBg}
      />
      <Container sx={{ mt: 4 }}>
        {services.map((service, index) => (
          <div key={service.title}>
            <Grid
              container
              spacing={4}
              direction={index % 2 === 0 ? "row" : "row-reverse"}
              sx={{ alignItems: "center", mb: 4 }}
            >
              <Grid item xs={12} md={6}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom>
                  {service.price}
                </Typography>
                <Typography variant="body1">{service.description}</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 4 }} />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default CybersecurityService;
