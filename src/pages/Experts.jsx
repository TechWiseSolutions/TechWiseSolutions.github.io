import React from "react";
import { Container, Grid } from "@mui/material";
import ExpertCard from "../Components/Experts/Expert";
import ResponsiveAppBar from "../Components/Common/ResponsiveAppBar";
import Hero from "../Components/Common/Hero";
import expertHero from "../images/expertsHero.png";

const ExpertsPage = () => {
  return (
    <div>
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
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <ExpertCard
              imageSrc="expert1.jpg"
              alt="Expert 1"
              expertName="Expert Name 1"
              specialization="Specialization"
              description="Description of the expertise and experience of Expert 1."
              bookNowLink="book-now.html"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ExpertCard
              imageSrc="expert2.jpg"
              alt="Expert 2"
              expertName="Expert Name 2"
              specialization="Specialization"
              description="Description of the expertise and experience of Expert 2."
              bookNowLink="book-now.html"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ExpertCard
              imageSrc="expert3.jpg"
              alt="Expert 3"
              expertName="Expert Name 3"
              specialization="Specialization"
              description="Description of the expertise and experience of Expert 3."
              bookNowLink="book-now.html"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ExpertCard
              imageSrc="expert4.jpg"
              alt="Expert 4"
              expertName="Expert Name 4"
              specialization="Specialization"
              description="Description of the expertise and experience of Expert 4."
              bookNowLink="book-now.html"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ExpertCard
              imageSrc="expert5.jpg"
              alt="Expert 5"
              expertName="Expert Name 5"
              specialization="Specialization"
              description="Description of the expertise and experience of Expert 5."
              bookNowLink="book-now.html"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ExpertCard
              imageSrc="expert6.jpg"
              alt="Expert 6"
              expertName="Expert Name 6"
              specialization="Specialization"
              description="Description of the expertise and experience of Expert 6."
              bookNowLink="book-now.html"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ExpertsPage;
