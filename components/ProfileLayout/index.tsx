import {
  Box,
  Container,
  MenuItem,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Button,
} from "@mui/material";
import Head from "next/head";
import React from "react";
import Navbar from "../Navbar/Navbar";

// interface layoutProps = {
//   pageTitle?: string
// }
const settings = [
  "Settings",
  "Orders",
  "Shipping",
  "Payments",
  "Notifications",
  "Logout",
];

const ProfileLayout = (props: any) => {
  return (
    <Box sx={{ bgcolor: "#fff" }}>
      <Head>
        <title>simpleBuy</title>
        <meta
          name="description"
          content="simpleBuy an eccomerce store which makes buying simple and less complicated"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Container sx={{ padding: { xs: "0px", md: "0px 16px" } }}>
        <Box sx={{ paddingTop: { xs: "60px", md: "80px" }, minHeight: "90vh" }}>
          {/* Hero Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "250px",
                bgcolor: "#f8f8f8",
                padding: "20px",
                display: { xs: "none", md: "block" },
              }}
            >
              <Box>
                {settings.map((setting) => (
                  <MenuItem key={setting}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                marginLeft: { xs: "0px", md: "20px" },
                padding: "10px 20px",
                width: "100%",
              }}
            >
              {props.children}
            </Box>
          </Box>
        </Box>
      </Container>

      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          borderTop: "1px solid #f1f1f1",
          background: "#0f5751",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          &copy;SimpleBuy 2022
        </Typography>
      </footer>
    </Box>
  );
};

export default ProfileLayout;
