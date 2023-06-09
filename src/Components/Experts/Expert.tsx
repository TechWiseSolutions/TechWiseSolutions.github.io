import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
} from "@mui/material";

interface ExpertCardProps {
  imageSrc: string;
  alt: string;
  expertName: string;
  specialization: string;
  description: string;
  bookNowLink: string;
}

const ExpertCard: React.FC<ExpertCardProps> = ({
  imageSrc,
  alt,
  expertName,
  specialization,
  description,
  bookNowLink,
}) => {
  return (
    <Card style={{ border: "1px solid #ccc", marginBottom: "20px" }}>
      <CardMedia
        component="img"
        src={imageSrc}
        alt={alt}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          objectFit: "cover",
          marginBottom: "10px",
        }}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          {expertName}
        </Typography>
        <Typography variant="subtitle1">{specialization}</Typography>
        <Typography variant="body2">{description}</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15px",
          }}
        >
          <Button
            href={bookNowLink}
            variant="contained"
            sx={{
              backgroundColor: "#B59410",
              color: "white",
              textDecoration: "none",
              borderRadius: "4px",
              "&:hover": { backgroundColor: "#B59300" },
            }}
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpertCard;
