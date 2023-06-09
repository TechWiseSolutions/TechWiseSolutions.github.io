import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const pages = ["Home", "Services", "Experts", "Contact Us", "Book Now"];
const pages_route = ["/", "/services", "/experts", "/contact", "/book"];

function ResponsiveAppBar() {
  const [activePage, setActivePage] = React.useState<string>("");
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleServicesClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleServiceItemClick = (page: string) => {
    setActivePage(page);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#003269" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <AdbIcon sx={{ mr: 4 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Times New Roman",
                fontWeight: 700,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TechWise Solutions
            </Typography>
          </Box>

          {pages.map((page, index) => {
            const isActive = activePage === page;

            if (page === "Services") {
              return (
                <div key={page}>
                  <Button
                    onClick={handleServicesClick}
                    sx={{
                      my: 2,
                      color: isActive ? "white" : "inherit",
                      display: "flex",
                      alignItems: "center",
                    }}
                    onMouseEnter={() => setActivePage(page)}
                    onMouseLeave={() => setActivePage("")}
                  >
                    <span>{page}</span>
                    <ArrowDropDownIcon
                      sx={{
                        ml: 1,
                        color: isActive ? "white" : "inherit",
                      }}
                    />
                  </Button>
                  <Menu
                    anchorEl={anchorElNav}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    MenuListProps={{
                      "aria-labelledby": "services-button",
                    }}
                  >
                    <MenuItem
                      onClick={() =>
                        handleServiceItemClick("IT Infrastructure")
                      }
                    >
                      <Link
                        to="/it-infrastructure"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        IT Infrastructure
                      </Link>
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        handleServiceItemClick("Business Intelligence")
                      }
                    >
                      <Link
                        to="/business-intelligence"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        Business Intelligence
                      </Link>
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleServiceItemClick("CyberSecurity")}
                    >
                      <Link
                        to="/cybersecurity"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        CyberSecurity
                      </Link>
                    </MenuItem>
                  </Menu>
                </div>
              );
            }

            return (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: isActive ? "white" : "inherit",
                  display: "block",
                }}
                onMouseEnter={() => setActivePage(page)}
                onMouseLeave={() => setActivePage("")}
                component={Link}
                to={pages_route[index]}
                style={{ textDecoration: "none" }}
              >
                {page}
              </Button>
            );
          })}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
