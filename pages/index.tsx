import { Box, Button, Container, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Layout from "../components/MainLayout/Layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Grid
          container
          spacing={2}
          my={1}
          // sx={{ boxShadow: { md: "0px 0px 3px 0px rgba(0,0,0,0.2)" } }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              margin: { xs: "10px auto", md: "10px 0px" },
              cursor: "pointer",
              "&:hover": {
                boxShadow: "2px 2px 20px 1px rgba(0,0,0,0.2)",
              },
            }}
            padding={"5px !important"}
            width={"280px !important"}
          >
            <Link href="/products/1" passHref>
              <Box>
                <Box
                  component={"img"}
                  src="/images/p8.jpg"
                  width="100%"
                  height="300px"
                />
                <Box padding={2}>
                  <Typography sx={{ fontSize: "12px" }}>
                    Jacket blue-black
                  </Typography>

                  <Box>
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiOutlineStar style={{ color: "#004c46" }} />
                  </Box>

                  <Typography sx={{ fontSize: "12px" }}>
                    Price: $350.89
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        textDecoration: "line-through",
                        color: "#888",
                      }}
                    >
                      discount price: $350.89
                    </Typography>
                    <Typography
                      bgcolor="#004c46"
                      sx={{
                        padding: "4px 10px",
                        opacity: "0.8",
                        color: "#fff",
                        fontSize: "12px",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      25%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              margin: { xs: "10px auto", md: "10px 0px" },
              cursor: "pointer",
              "&:hover": {
                boxShadow: "2px 2px 20px 1px rgba(0,0,0,0.2)",
              },
            }}
            padding={"5px !important"}
            width={"280px !important"}
          >
            <Link href="/products/1" passHref>
              <Box>
                <Box
                  component={"img"}
                  src="/images/p2.jpg"
                  width="100%"
                  height="300px"
                />
                <Box padding={2}>
                  <Typography sx={{ fontSize: "12px" }}>
                    Jacket blue-black
                  </Typography>

                  <Box>
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiOutlineStar style={{ color: "#004c46" }} />
                  </Box>

                  <Typography sx={{ fontSize: "12px" }}>
                    Price: $350.89
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        textDecoration: "line-through",
                        color: "#888",
                      }}
                    >
                      discount price: $350.89
                    </Typography>
                    <Typography
                      bgcolor="#004c46"
                      sx={{
                        padding: "4px 10px",
                        opacity: "0.8",
                        color: "#fff",
                        fontSize: "12px",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      25%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              margin: { xs: "10px auto", md: "10px 0px" },
              cursor: "pointer",
              "&:hover": {
                boxShadow: "2px 2px 20px 1px rgba(0,0,0,0.2)",
              },
            }}
            padding={"5px !important"}
            width={"280px !important"}
          >
            <Link href="/products/1" passHref>
              <Box>
                <Box
                  component={"img"}
                  src="/images/p1.jpg"
                  width="100%"
                  height="300px"
                />
                <Box padding={2}>
                  <Typography sx={{ fontSize: "12px" }}>
                    Jacket blue-black
                  </Typography>

                  <Box>
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiOutlineStar style={{ color: "#004c46" }} />
                  </Box>

                  <Typography sx={{ fontSize: "12px" }}>
                    Price: $350.89
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        textDecoration: "line-through",
                        color: "#888",
                      }}
                    >
                      discount price: $350.89
                    </Typography>
                    <Typography
                      bgcolor="#004c46"
                      sx={{
                        padding: "4px 10px",
                        opacity: "0.8",
                        color: "#fff",
                        fontSize: "12px",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      25%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              margin: { xs: "10px auto", md: "10px 0px" },
              cursor: "pointer",
              "&:hover": {
                boxShadow: "2px 2px 20px 1px rgba(0,0,0,0.2)",
              },
            }}
            padding={"5px !important"}
            width={"280px !important"}
          >
            <Link href="/products/1" passHref>
              <Box>
                <Box
                  component={"img"}
                  src="/images/p3.jpg"
                  width="100%"
                  height="300px"
                />
                <Box padding={2}>
                  <Typography sx={{ fontSize: "12px" }}>
                    Jacket blue-black
                  </Typography>

                  <Box>
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiOutlineStar style={{ color: "#004c46" }} />
                  </Box>

                  <Typography sx={{ fontSize: "12px" }}>
                    Price: $350.89
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        textDecoration: "line-through",
                        color: "#888",
                      }}
                    >
                      discount price: $350.89
                    </Typography>
                    <Typography
                      bgcolor="#004c46"
                      sx={{
                        padding: "4px 10px",
                        opacity: "0.8",
                        color: "#fff",
                        fontSize: "12px",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      25%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              margin: { xs: "10px auto", md: "10px 0px" },
              cursor: "pointer",
              "&:hover": {
                boxShadow: "2px 2px 20px 1px rgba(0,0,0,0.2)",
              },
            }}
            padding={"5px !important"}
            width={"280px !important"}
          >
            <Link href="/products/1" passHref>
              <Box>
                <Box
                  component={"img"}
                  src="/images/p4.jpg"
                  width="100%"
                  height="300px"
                />
                <Box padding={2}>
                  <Typography sx={{ fontSize: "12px" }}>
                    Jacket blue-black
                  </Typography>

                  <Box>
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiOutlineStar style={{ color: "#004c46" }} />
                  </Box>

                  <Typography sx={{ fontSize: "12px" }}>
                    Price: $350.89
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        textDecoration: "line-through",
                        color: "#888",
                      }}
                    >
                      discount price: $350.89
                    </Typography>
                    <Typography
                      bgcolor="#004c46"
                      sx={{
                        padding: "4px 10px",
                        opacity: "0.8",
                        color: "#fff",
                        fontSize: "12px",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      25%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              margin: { xs: "10px auto", md: "10px 0px" },
              cursor: "pointer",
              "&:hover": {
                boxShadow: "2px 2px 20px 1px rgba(0,0,0,0.2)",
              },
            }}
            padding={"5px !important"}
            width={"280px !important"}
          >
            <Link href="/products/1" passHref>
              <Box>
                <Box
                  component={"img"}
                  src="/images/p5.jpg"
                  width="100%"
                  height="300px"
                />
                <Box padding={2}>
                  <Typography sx={{ fontSize: "12px" }}>
                    Jacket blue-black
                  </Typography>

                  <Box>
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiOutlineStar style={{ color: "#004c46" }} />
                  </Box>

                  <Typography sx={{ fontSize: "12px" }}>
                    Price: $350.89
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        textDecoration: "line-through",
                        color: "#888",
                      }}
                    >
                      discount price: $350.89
                    </Typography>
                    <Typography
                      bgcolor="#004c46"
                      sx={{
                        padding: "4px 10px",
                        opacity: "0.8",
                        color: "#fff",
                        fontSize: "12px",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      25%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              margin: { xs: "10px auto", md: "10px 0px" },
              cursor: "pointer",
              "&:hover": {
                boxShadow: "2px 2px 20px 1px rgba(0,0,0,0.2)",
              },
            }}
            padding={"5px !important"}
            width={"280px !important"}
          >
            <Link href="/products/1" passHref>
              <Box>
                <Box
                  component={"img"}
                  src="/images/p6.jpg"
                  width="100%"
                  height="300px"
                />
                <Box padding={2}>
                  <Typography sx={{ fontSize: "12px" }}>
                    Jacket blue-black
                  </Typography>

                  <Box>
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiOutlineStar style={{ color: "#004c46" }} />
                  </Box>

                  <Typography sx={{ fontSize: "12px" }}>
                    Price: $350.89
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        textDecoration: "line-through",
                        color: "#888",
                      }}
                    >
                      discount price: $350.89
                    </Typography>
                    <Typography
                      bgcolor="#004c46"
                      sx={{
                        padding: "4px 10px",
                        opacity: "0.8",
                        color: "#fff",
                        fontSize: "12px",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      25%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            sx={{
              margin: { xs: "10px auto", md: "10px 0px" },
              cursor: "pointer",
              "&:hover": {
                boxShadow: "2px 2px 20px 1px rgba(0,0,0,0.2)",
              },
            }}
            padding={"5px !important"}
            width={"280px !important"}
          >
            <Link href="/products/1" passHref>
              <Box>
                <Box
                  component={"img"}
                  src="/images/p7.jpg"
                  width="100%"
                  height="300px"
                />
                <Box padding={2}>
                  <Typography sx={{ fontSize: "12px" }}>
                    Jacket blue-black
                  </Typography>

                  <Box>
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiFillStar style={{ color: "#eca619" }} />
                    <AiOutlineStar style={{ color: "#004c46" }} />
                  </Box>

                  <Typography sx={{ fontSize: "12px" }}>
                    Price: $350.89
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        textDecoration: "line-through",
                        color: "#888",
                      }}
                    >
                      discount price: $350.89
                    </Typography>
                    <Typography
                      bgcolor="#004c46"
                      sx={{
                        padding: "4px 10px",
                        opacity: "0.8",
                        color: "#fff",
                        fontSize: "12px",
                        textAlign: "center",
                        marginLeft: "10px",
                      }}
                    >
                      25%
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Link>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
