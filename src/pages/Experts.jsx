import React from "react";
import { Container, Grid } from "@mui/material";
import ExpertCard from "../Components/Experts/Expert";
import ResponsiveAppBar from "../Components/Common/ResponsiveAppBar";
import Hero from "../Components/Common/Hero";
import expertHero from "../images/expertsHero.jpg";
import expert1 from "../images/ppl2.jpg";
import expert3 from "../images/ppl3.jpg";
import expert2 from "../images/ppl4.jpg";
import expert4 from "../images/ppl1.jpg";
import expert5 from "../images/ppl5.jpg";
import expert6 from "../images/ppl6.jpg";

const experts = [
  {
    name: "John Doe",
    specialization: "IT Infrastructure",
    description:
      "John Doe has extensive experience in setting up and managing IT infrastructure for businesses. He specializes in network connectivity, server configuration, and device management.",
    imageSrc: expert1,
    alt: "John Doe",
  },
  {
    name: "Jane Smith",
    specialization: "IT Infrastructure",
    description:
      "Jane Smith is a skilled IT infrastructure expert. With a focus on network security and virtualization, she helps businesses optimize their infrastructure for efficiency and scalability.",
    imageSrc: expert2,
    alt: "Jane Smith",
  },
  {
    name: "Mike Johnson",
    specialization: "Cybersecurity",
    description:
      "Mike Johnson is a cybersecurity expert skilled in identifying and mitigating security risks. He provides comprehensive security solutions to protect businesses from cyber threats and ensure data integrity.",
    imageSrc: expert3,
    alt: "Mike Johnson",
  },
  {
    name: "Emily Davis",
    specialization: "Cybersecurity",
    description:
      "Emily Davis is an experienced cybersecurity consultant. With expertise in penetration testing and security audits, she helps businesses fortify their digital defenses and ensure compliance.",
    imageSrc: expert4,
    alt: "Emily Davis",
  },
  {
    name: "Alex Thompson",
    specialization: "Business Intelligence",
    description:
      "Alex Thompson is a business intelligence expert with a passion for data analytics. He helps businesses uncover insights, optimize operations, and make data-driven decisions.",
    imageSrc: expert5,
    alt: "Alex Thompson",
  },
  {
    name: "Jacob Williams",
    specialization: "Business Intelligence",
    description:
      "Jacob William specializes in data visualization and reporting. With her expertise in BI tools and techniques, she assists businesses in transforming complex data into actionable insights.",
    imageSrc: expert6,
    alt: "Jacob Williams",
  },
];

const ExpertsPage = () => {
  return (
    <div style={{ backgroundColor: "#003269" }}>
      <div className="nav">
        <ResponsiveAppBar />
      </div>
      <div>
        <Hero
          title="Meet Our Experts"
          description="Learn from our team of experienced professionals"
          backgroundImage={expertHero}
        />
      </div>
      <Container maxWidth="xl" style={{ marginTop: "20px" }}>
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 3, lg: 4, xl: 6 }}
          justifyContent="center"
        >
          {experts.map((expert, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ExpertCard
                imageSrc={expert.imageSrc}
                alt={expert.alt}
                expertName={expert.name}
                specialization={expert.specialization}
                description={expert.description}
                bookNowLink="/book"
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ExpertsPage;
