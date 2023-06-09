import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

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
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        maxWidth: "2500px", // Set the maximum width of the card
        margin: "0 auto",
      }}
    >
      <CardMedia
        component="img"
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
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          {expertName}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {specialization}
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      <div style={{ padding: "8px", textAlign: "center" }}>
        <Button
          href={bookNowLink}
          variant="contained"
          sx={{
            borderRadius: "4px",
            textTransform: "none",
            width: "100%",
            backgroundColor: "#B59410",
            ":hover": {
              backgroundColor: "#B58400",
            },
          }}
        >
          Book Now
        </Button>
      </div>
    </Card>
  );
};

export default ExpertCard;
