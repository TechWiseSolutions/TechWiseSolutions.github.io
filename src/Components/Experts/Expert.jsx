import React from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Button,
//   CardMedia,
// } from "@mui/material";
import { Card, Button } from "react-bootstrap";

const ExpertCard = ({
  imageSrc,
  alt,
  expertName,
  specialization,
  description,
  bookNowLink,
}) => {
  return (
    <Card
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        height: "100%",
        width: "90%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: "1500px",
        margin: "0 auto",
      }}
    >
      <Card.Img
        variant="top"
        src={imageSrc}
        alt={alt}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
        }}
      />
      <Card.Body>
        <Card.Title>{expertName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {specialization}
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <div style={{ padding: "8px", textAlign: "center" }}>
        <Button
          href={bookNowLink}
          variant="custom"
          style={{
            borderRadius: "4px",
            textTransform: "none",
            width: "100%",
            backgroundColor: "#B59410",
          }}
        >
          Book Now
        </Button>
      </div>
    </Card>
  );
};

export default ExpertCard;
