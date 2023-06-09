import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const BookingPopup = ({
  fullName,
  email,
  service,
  expert,
  date,
  time,
  closePopup,
}) => {
  return (
    <Dialog open={true} onClose={closePopup} sx={{ borderRadius: "10px" }}>
      <DialogTitle sx={{ backgroundColor: "#003269", color: "#ffffff" }}>
        Booking Confirmation
      </DialogTitle>
      <DialogContent
        sx={{
          backgroundColor: "#f2f2f2",
          color: "#333333",
          padding: "20px",
          position: "relative",
          border: "1px solid #003269",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <CheckCircleOutlineIcon sx={{ fontSize: "72px", color: "#003269" }} />
        </Box>
        <Typography variant="h6" gutterBottom>
          Thank you, <strong>{fullName}</strong>, for booking with us!
        </Typography>
        <Typography variant="body1" gutterBottom>
          You have successfully booked a <strong>{service}</strong> appointment
          with <strong>{expert}</strong> on{" "}
          {new Date(date).toLocaleDateString(undefined, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          at {time}.
        </Typography>
        <Typography variant="body1">
          An email confirmation will be sent to <strong>{email}</strong>.
        </Typography>
      </DialogContent>
      <DialogActions sx={{ backgroundColor: "#f2f2f2" }}>
        <Button
          onClick={closePopup}
          variant="contained "
          sx={{ backgroundColor: "#B59410" }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookingPopup;
