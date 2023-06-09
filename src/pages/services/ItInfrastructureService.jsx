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
import tier1 from "../../images/BasicIT.jpg";
import tier2 from "../../images/advacnedIT.jpg";
import tier3 from "../../images/PremiumIT.jpg";
import InfraBg from "../../images/InfraBG.jpg";

const tiers = [
  {
    title: "Basic Tier",
    price: "$199/month",
    description:
      "Ideal for small businesses or startups that require essential IT infrastructure setup, including network connectivity, basic server configuration, and device management.",
    image: tier1,
  },
  {
    title: "Advanced Tier",
    price: "$499/month",
    description:
      "Suitable for medium-sized businesses looking for an expanded IT infrastructure solution, including advanced network security, virtualization, cloud integration, and backup systems.",
    image: tier2,
  },
  {
    title: "Premium Tier",
    price: "$899/month",
    description:
      "Designed for large enterprises requiring comprehensive IT infrastructure services, such as scalable server clusters, disaster recovery planning, 24/7 monitoring, and advanced cybersecurity measures.",
    image: tier3,
  },
];

const InfrastructureService = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Hero
        title="IT Infrastructure Service"
        description="We offer a wide range of IT infrastructure services to help you build a robust and secure IT environment for your business"
        backgroundImage={InfraBg}
      />
      <Container sx={{ mt: 4 }}>
        {tiers.map((tier, index) => (
          <div key={tier.title}>
            <Grid
              container
              spacing={4}
              direction={index % 2 === 0 ? "row" : "row-reverse"}
              sx={{ alignItems: "center", mb: 4 }}
            >
              <Grid item xs={12} md={6}>
                <img
                  src={tier.image}
                  alt={tier.title}
                  style={{ width: "100%", height: "auto" }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {tier.title}
                </Typography>
                <Typography variant="h6" component="h3" gutterBottom>
                  {tier.price}
                </Typography>
                <Typography variant="body1">{tier.description}</Typography>
              </Grid>
            </Grid>
            <Divider sx={{ my: 4 }} />
          </div>
        ))}
      </Container>
    </div>
  );
};

export default InfrastructureService;
