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
import React, { useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Navbar from "../../components/Navbar/Navbar";
import { productInterface } from "lib/types";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "app/store";
import { addCartItem, addToCart } from "features/cart/cartSlice";
import { useRouter } from "next/router";
import { getProduct, getProducts } from "features/products/productSlice";
import Image from "next/image";

interface productInt {
  product: productInterface;
}

const ProductDetails = (props: productInt) => {
  const { product, isLoading } = useSelector(
    (state: RootState) => state.products
  );
  const products = useSelector((state: RootState): productInterface[] =>
    state?.products?.products?.slice(0, 4)
  );

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useAppDispatch();
  const router = useRouter();
  let { id } = router.query;

  useEffect(() => {
    dispatch(getProducts());

    dispatch(getProduct(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addCartItem(product));
  };

  return (
    <div>
      <Navbar />
      <Box pt={"80px"}>
        <Container>
          <Box>
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
            {product && (
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
                          src={"/images/" + product.imageUrl}
                          sx={{ width: "250px", height: "250px" }}
                        />
                      </Box>

                      <Box sx={{ width: "100%" }}>
                        <Typography variant="h6" component="p">
                          {product.name}
                        </Typography>

                        <Typography variant="h6" component="p">
                          Price: ${product.price}
                        </Typography>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography
                            sx={{
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
                          onClick={handleAddToCart}
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
                      <Typography>{product.description}</Typography>
                    </Box>
                  </Box>
                </Grid>

                {/* // Similar Products */}
                <Grid item xs={12} sm={4}>
                  <Box bgcolor="#fff" p={{ xs: 0, sm: 2.5 }}>
                    <Typography variant="h6" component="p">
                      Simillar Product
                    </Typography>

                    {products?.length > 0 &&
                      products?.map((product: productInterface, index) => (
                        <Link
                          href={"/products/" + product.id}
                          passHref
                          key={product.id}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              cursor: "pointer",
                            }}
                            flexDirection={{
                              xs: "row",
                              sm: "column",
                              md: "row",
                            }}
                            marginBottom={"10px"}
                          >
                            <Box mr={3} mb={2}>
                              <Box
                                component="img"
                                src={"/images/" + product.imageUrl}
                                sx={{
                                  width: { xs: "90px", md: "80px" },
                                  height: { xs: "90px", md: "80px" },
                                }}
                              />
                            </Box>

                            <Box sx={{ width: "100%" }}>
                              <Typography sx={{ fontSize: "12px" }}>
                                {product.name}
                              </Typography>

                              <Typography sx={{ fontSize: "12px" }}>
                                Price: ${product.price}
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
                                  discount price: ${product.discountPrice}
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Link>
                      ))}
                  </Box>
                </Grid>
              </Grid>
            )}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default ProductDetails;
