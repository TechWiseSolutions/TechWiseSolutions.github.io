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
import BIImage1 from "../../images/BIImage1.jpg";
import BIImage2 from "../../images/BIImage2.jpg";
import BIImage3 from "../../images/BIImage3.jpg";
import BIBg from "../../images/123.jpg";

const services = [
  {
    title: "Data Analysis and Visualization",
    price: "$999/month",
    description:
      "Utilize the power of data analysis and visualization to gain insights from your business data. Our experts will help you uncover trends, patterns, and actionable insights through visually compelling dashboards and reports.",
    image: BIImage1,
  },
  {
    title: "Data Warehousing and ETL",
    price: "$1499/month",
    description:
      "Establish a robust data warehousing infrastructure and efficient Extract, Transform, Load (ETL) processes. We'll help you centralize and integrate your data for seamless access, ensuring accuracy and reliability.",
    image: BIImage2,
  },
  {
    title: "Predictive Analytics",
    price: "$1999/month",
    description:
      "Leverage predictive analytics to forecast business trends, identify opportunities, and make data-driven decisions. Our team will develop advanced models and algorithms to help you stay ahead of the competition.",
    image: BIImage3,
  },
];

const BusinessService = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Hero
        title="Business Intelligence Consulting"
        description="Unlock the power of data to make informed business decisions"
        backgroundImage={BIBg}
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

export default BusinessService;
