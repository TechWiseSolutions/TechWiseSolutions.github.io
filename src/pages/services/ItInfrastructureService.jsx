import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import ResponsiveAppBar from "../../Components/Common/ResponsiveAppBar";
import Hero from "../../Components/Common/Hero";

const tiers = [
  {
    title: "Tier 1",
    price: "$99/month",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla consectetur arcu eget faucibus.",
    image: "https://picsum.photos/200/300", // Replace with the path to your tier 1 image
  },
  {
    title: "Tier 2",
    price: "$199/month",
    description:
      "Sed tincidunt ultricies arcu ut tincidunt. Integer at leo scelerisque, venenatis tellus eu, placerat purus.",
    image: "https://picsum.photos/200/300", // Replace with the path to your tier 2 image
  },
  {
    title: "Tier 3",
    price: "$299/month",
    description:
      "Fusce rhoncus leo id turpis blandit, non commodo elit aliquam. Curabitur fermentum leo eu congue semper.",
    image: "https://picsum.photos/200/300", // Replace with the path to your tier 3 image
  },
];

const InfrastructureService = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Hero
        title="IT Infrastructure Service"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        backgroundImage=""
      />
      <Container className="mt-4">
        {tiers.map((tier, index) => (
          <Row key={tier.title} className="mb-4">
            <Col md={6} className="order-md-1 order-2">
              <img src={tier.image} alt={tier.title} className="img-fluid" />
            </Col>
            <Col md={6} className="order-md-2 order-1">
              <div>
                <h5 className="mb-3">{tier.title}</h5>
                <h6 className="mb-3">{tier.price}</h6>
                <p>{tier.description}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default InfrastructureService;
