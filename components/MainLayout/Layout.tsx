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

const Layout = (props: any) => {
  const pages = [
    "Computing",
    "Phone & Tablets",
    "Electronics",
    "Clothing",
    "Groceries",
    "Health & Beauty",
    "Sporting Goods",
    "Fashion",
    "Baby Products",
  ];

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
        <Box
          sx={{ paddingTop: { xs: "60px", md: "80px" }, minHeight: "100vh" }}
        >
          {/* Hero Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              height: { xs: "200px", sm: "450px" },
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
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Box>
            </Box>
            <Box
              sx={{
                // flexGrow: 1,
                marginLeft: { xs: "0px", md: "20px" },
                bgcolor: "#0f5751",
                padding: "0px",
                color: "#fff",
                width: "100%",
              }}
            >
              <Box
                component="img"
                src="/images/bg.jpg"
                width="100%"
                height="100%"
              />
            </Box>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              padding: { xs: "20px 30px", md: "30px 20px" },
            }}
          >
            {props.children}
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

export default Layout;
