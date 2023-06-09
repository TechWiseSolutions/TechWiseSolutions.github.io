import React from "react";
import { Modal, Button } from "react-bootstrap";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const BookingPopup = ({
  fullName,
  email,
  service,
  expert,
  date,
  time,
  closePopup,
  show,
}) => {
  return (
    <Modal
      show={show}
      onHide={closePopup}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Booking Confirmation
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="booking-confirmation">
          <div className="booking-icon">
            <CheckCircleOutlineIcon fontSize="large" />
          </div>
          <h6>
            Thank you, <strong>{fullName}</strong>, for booking with us!
          </h6>
          <p>
            You have successfully booked a <strong>{service}</strong>{" "}
            appointment with <strong>{expert}</strong> on{" "}
            {new Date(date).toLocaleDateString(undefined, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            at {time}.
          </p>
          <p>
            An email confirmation will be sent to <strong>{email}</strong>.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closePopup} variant="primary">
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingPopup;
