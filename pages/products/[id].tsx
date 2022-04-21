import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";
import { productInterface } from "lib/types";

interface productInt {
  product: productInterface;
}

const ProductDetails = (props: productInt) => {
  return (
    <div>
      <Navbar />
      <Box pt={"80px"}>
        <Container>
          <Box>
            <Grid container justifyContent="space-between" spacing={1}>
              <Grid item xs={12} sm={8}>
                <Box bgcolor="#fff" p={{ xs: 0, sm: 2.5 }}>
                  <Box
                    sx={{
                      display: "flex",
                    }}
                    flexDirection={{ xs: "column", md: "row" }}
                    py={3}
                  >
                    <Box
                      mr={3}
                      mb={2}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Box
                        component="img"
                        src={"/images/p8.jpg"}
                        sx={{ width: "250px", height: "250px" }}
                      />
                    </Box>

                    <Box sx={{ width: "100%" }}>
                      <Typography variant="h6" component="p">
                        Samsung Galaxy -A12 7F/DS - 64GB HDD - 4GB RAM
                        Smartphone - Black
                      </Typography>

                      <Typography variant="h6" component="p">
                        Price: $350.89
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          sx={{
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
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography component="span" color="#888">
                          Product rating:{" "}
                        </Typography>
                        <AiFillStar style={{ color: "#eca619" }} />
                        <AiFillStar style={{ color: "#eca619" }} />
                        <AiFillStar style={{ color: "#eca619" }} />
                        <AiFillStar style={{ color: "#eca619" }} />
                        <AiOutlineStar style={{ color: "#004c46" }} />
                      </Box>

                      <Button
                        size="small"
                        sx={{
                          width: { xs: "100%" },
                          marginTop: "15px",
                          color: "#fff",
                          padding: "8px 20px",
                          marginRight: "10px",
                          bgcolor: "#004c46",
                          "&:hover": {
                            bgcolor: "#004c46",
                            color: "#fff",
                          },
                        }}
                      >
                        Add to cart
                      </Button>
                    </Box>
                  </Box>

                  <Divider />
                  <Box py={3}>
                    <Typography variant="h6" component="p" py={1}>
                      Proudct Information
                    </Typography>
                    <Typography>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellendus, repellat amet. Deserunt voluptatibus saepe
                      natus quia molestiae quod soluta optio.
                    </Typography>
                    <br />
                    <Typography>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Repellendus, repellat amet. Deserunt voluptatibus saepe
                      natus quia molestiae quod soluta optio.
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* Similar Products */}
              <Grid item xs={12} sm={4}>
                <Box bgcolor="#fff" p={{ xs: 0, sm: 2.5 }}>
                  <Typography variant="h6" component="p">
                    Simillar Product
                  </Typography>

                  <Link href="/products/1" passHref>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      flexDirection={{ xs: "row", sm: "column", md: "row" }}
                      marginBottom={"10px"}
                    >
                      <Box mr={3} mb={2}>
                        <Box
                          component="img"
                          src={"/images/p1.jpg"}
                          sx={{
                            width: { xs: "90px", md: "80px" },
                            height: { xs: "90px", md: "80px" },
                          }}
                        />
                      </Box>

                      <Box sx={{ width: "100%" }}>
                        <Typography sx={{ fontSize: "12px" }}>
                          Samsung Galaxy -A12 7F/DS - 64GB HDD - 4GB RAM
                          Smartphone - Black
                        </Typography>

                        <Typography sx={{ fontSize: "12px" }}>
                          Price: $350.89
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              textDecoration: "line-through",
                              color: "#888",
                              fontSize: "12px",
                            }}
                          >
                            discount price: $350.89
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Link>

                  <Link href="/products/1" passHref>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      flexDirection={{ xs: "row", sm: "column", md: "row" }}
                      marginBottom={"10px"}
                    >
                      <Box mr={3} mb={2}>
                        <Box
                          component="img"
                          src={"/images/p3.jpg"}
                          sx={{
                            width: { xs: "90px", md: "80px" },
                            height: { xs: "90px", md: "80px" },
                          }}
                        />
                      </Box>

                      <Box sx={{ width: "100%" }}>
                        <Typography sx={{ fontSize: "12px" }}>
                          Samsung Galaxy -A12 7F/DS - 64GB HDD - 4GB RAM
                          Smartphone - Black
                        </Typography>

                        <Typography sx={{ fontSize: "12px" }}>
                          Price: $350.89
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              textDecoration: "line-through",
                              color: "#888",
                              fontSize: "12px",
                            }}
                          >
                            discount price: $350.89
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Link>

                  <Link href="/products/1" passHref>
                    <Box
                      sx={{
                        display: "flex",
                        // alignItems: "center",
                        cursor: "pointer",
                      }}
                      flexDirection={{ xs: "row", sm: "column", md: "row" }}
                      marginBottom={"10px"}
                    >
                      <Box mr={3} mb={2}>
                        <Box
                          component="img"
                          src={"/images/p6.jpg"}
                          sx={{
                            width: { xs: "90px", md: "80px" },
                            height: { xs: "90px", md: "80px" },
                          }}
                        />
                      </Box>

                      <Box sx={{ width: "100%" }}>
                        <Typography sx={{ fontSize: "12px" }}>
                          Samsung Galaxy -A12 7F/DS - 64GB HDD - 4GB RAM
                          Smartphone - Black
                        </Typography>

                        <Typography sx={{ fontSize: "12px" }}>
                          Price: $350.89
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              textDecoration: "line-through",
                              color: "#888",
                              fontSize: "12px",
                            }}
                          >
                            discount price: $350.89
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Link>

                  <Link href="/products/1" passHref>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      flexDirection={{ xs: "row", sm: "column", md: "row" }}
                      marginBottom={"10px"}
                    >
                      <Box mr={3} mb={2}>
                        <Box
                          component="img"
                          src={"/images/p8.jpg"}
                          sx={{
                            width: { xs: "90px", md: "80px" },
                            height: { xs: "90px", md: "80px" },
                          }}
                        />
                      </Box>

                      <Box sx={{ width: "100%" }}>
                        <Typography sx={{ fontSize: "12px" }}>
                          Samsung Galaxy -A12 7F/DS - 64GB HDD - 4GB RAM
                          Smartphone - Black
                        </Typography>

                        <Typography sx={{ fontSize: "12px" }}>
                          Price: $350.89
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            sx={{
                              textDecoration: "line-through",
                              color: "#888",
                              fontSize: "12px",
                            }}
                          >
                            discount price: $350.89
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default ProductDetails;
