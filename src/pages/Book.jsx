import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers";
import ResponsiveAppBar from "../Components/Common/ResponsiveAppBar";
import Hero from "../Components/Common/Hero";
import dayjs from "dayjs";
import { Chip } from "@mui/material";
import BookingPopup from "../Components/Booking/BookingPopup.jsx";
import bookingBg from "../images/tech-consulting-services-1.jpg";

const services = [
  {
    id: 1,
    name: "IT Infrastructure",
    experts: ["John Doe", "Jane Smith"],
  },
  {
    id: 2,
    name: "Buissness Intelligence",
    experts: ["Alex Thompson", "Jacob Williams"],
  },
  {
    id: 3,
    name: "CyberSecurity",
    experts: ["Emily Davis", "Mike Johnson"],
  },
];

const expertAvailability = {
  "John Doe": ["10:00 AM", "11:00 AM", "12:00 PM"],
  "Jane Smith": ["09:00 AM", "10:00 AM", "11:00 AM"],
  "Alex Thompson": ["02:00 PM", "03:00 PM", "04:00 PM"],
  "Jacob Williams": ["03:00 PM", "04:00 PM", "05:00 PM"],
  "Emily Davis": ["09:00 AM", "10:00 AM", "11:00 AM"],
  "Mike Johnson": ["01:00 PM", "02:00 PM", "03:00 PM"],
};

const expertUnavailableDates = {
  "John Doe": [
    "2023-06-10",
    "2023-06-15",
    "2023-06-20",
    "2023-07-05",
    "2023-07-10",
  ],
  "Jane Smith": ["2023-06-12", "2023-06-19", "2023-07-05", "2023-07-20"],
  "Alex Thompson": ["2023-06-11", "2023-06-17", "2023-07-01", "2023-07-15"],
  "Jacob Williams": ["2023-06-14", "2023-06-19", "2023-07-04", "2023-07-12"],
  "Emily Davis": ["2023-06-09", "2023-06-16", "2023-07-03", "2023-07-08"],
  "Mike Johnson": ["2023-06-13", "2023-06-21", "2023-07-06", "2023-07-18"],
};

const Book = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedExpert, setSelectedExpert] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [availableTimes, setAvailableTimes] = useState([]);

  const [openPopup, setOpenPopup] = useState(false);

  const handleBookNow = () => {
    // Perform booking logic here
    // Set openPopup to true to open the popup
    setOpenPopup(true);
  };

  const closePopup = () => {
    // Close the popup
    setOpenPopup(false);
  };

  const handleExpertChange = (expert) => {
    setSelectedExpert(expert);
    setAvailableTimes(expertAvailability[expert] || []);
  };

  const shouldDisableDate = (date) => {
    const today = dayjs().startOf("day");
    const selectedDate = dayjs(date).startOf("day");
    const isWeekend = selectedDate.day() === 0 || selectedDate.day() === 6; // Sunday: 0, Saturday: 6
    const unavailableDates = expertUnavailableDates[selectedExpert] || [];
    const isUnavailable = unavailableDates.some((unavailableDate) =>
      selectedDate.isSame(dayjs(unavailableDate), "day")
    );
    return selectedDate.isBefore(today) || isWeekend || isUnavailable;
  };

  const validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    // Reset the selected date when the selected expert changes
    setSelectedDate(null);
    setSelectedTime(null);
  }, [selectedExpert]);

  return (
    <div>
      <div>
        <ResponsiveAppBar />
      </div>
      <div>
        <Hero
          title="Book Now"
          description="Book an appointment with us today!"
          backgroundImage={bookingBg}
        />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
          backgroundColor: "#003269",
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Card sx={{ width: "100%" }}>
              <CardContent>
                <Typography variant="h5" component="h2" align="center">
                  Personal Information
                </Typography>
                <Box sx={{ marginTop: "20px" }}>
                  <TextField
                    id="fullName"
                    label="Full Name"
                    variant="outlined"
                    fullWidth
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ marginTop: "20px" }}
                  />
                </Box>
              </CardContent>
            </Card>
            <Card style={{ marginTop: "30px" }}>
              <CardContent>
                <Typography variant="h5" component="h2" align="center">
                  Service and Expert
                </Typography>
                <Box sx={{ marginTop: "20px" }}>
                  <TextField
                    id="service"
                    variant="outlined"
                    fullWidth
                    select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service.id} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </TextField>
                  <TextField
                    id="expert"
                    variant="outlined"
                    fullWidth
                    select
                    value={selectedExpert}
                    onChange={(e) => handleExpertChange(e.target.value)}
                    SelectProps={{
                      native: true,
                    }}
                    sx={{ marginTop: "20px" }}
                  >
                    <option value="" disabled>
                      Select an expert
                    </option>
                    {selectedService &&
                      services
                        .find((service) => service.name === selectedService)
                        ?.experts.map((expert) => (
                          <option key={expert} value={expert}>
                            {expert}
                          </option>
                        ))}
                  </TextField>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" align="center">
                  Date and Time
                </Typography>
                <Box sx={{ marginTop: "20px" }}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDatePicker
                      value={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      disabled={!selectedExpert}
                      shouldDisableDate={shouldDisableDate}
                    />
                  </LocalizationProvider>
                </Box>
                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="h6" component="h2" align="center">
                      Select Time
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                      }}
                    >
                      {expertAvailability[selectedExpert]?.map((time) => (
                        <Chip
                          key={time}
                          label={time}
                          variant={
                            selectedTime === time ? "filled" : "outlined"
                          }
                          onClick={() => setSelectedTime(time)}
                          sx={{ margin: "5px" }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                  sx={{ marginTop: "20px", backgroundColor: "#B59410" }}
                  onClick={handleBookNow}
                  disabled={
                    !fullName ||
                    !email ||
                    !selectedService ||
                    !selectedExpert ||
                    !selectedDate ||
                    !selectedTime
                  }
                >
                  Book Now
                </Button>
                <div>
                  {openPopup && (
                    <BookingPopup
                      fullName={fullName}
                      email={email}
                      service={selectedService}
                      expert={selectedExpert}
                      time={selectedTime}
                      date={selectedDate}
                      closePopup={closePopup}
                      show={openPopup}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Book;
