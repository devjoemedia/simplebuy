import { Box, Button, Container, Grid, Typography } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Layout from "../components/MainLayout/Layout";
import styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "app/store";
import { useEffect } from "react";
import { getProducts } from "features/products/productSlice";
import { productInterface } from "lib/types";
import firebaseDB from "database/firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Image from "next/image";

const Home: NextPage = () => {
  const { products, isLoading } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useAppDispatch();

  console.log("Mongoose", products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Layout>
        {isLoading && (
          <Box
            width="100%"
            height="300px"
            sx={{ display: "grid", placeItems: "center" }}
          >
            <Image
              width={200}
              height={200}
              src="/images/loader.svg"
              alt="Loading..."
            />
          </Box>
        )}

        <Grid container spacing={2} my={1}>
          {products?.length > 0 &&
            products.map((product, index) => (
              <Grid
                item
                key={product.id}
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
                <Link href={"/products/" + product.id} passHref>
                  <Box>
                    <Box
                      component={"img"}
                      src={"/images/" + product.imageUrl}
                      width="100%"
                      height="300px"
                    />
                    <Box padding={2}>
                      <Typography sx={{ fontSize: "12px" }}>
                        {product.name}
                      </Typography>

                      <Box>
                        <AiFillStar style={{ color: "#eca619" }} />
                        <AiFillStar style={{ color: "#eca619" }} />
                        <AiFillStar style={{ color: "#eca619" }} />
                        <AiFillStar style={{ color: "#eca619" }} />
                        <AiOutlineStar style={{ color: "#004c46" }} />
                      </Box>

                      <Typography sx={{ fontSize: "12px" }}>
                        Price: ${product.price}
                      </Typography>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            textDecoration: "line-through",
                            color: "#888",
                          }}
                        >
                          discount price: ${product.discountPrice}
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
                          {(
                            (product.discountPrice / product.price) *
                            100
                          ).toFixed(2)}
                          %
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Layout>
    </>
  );
};

export default Home;
