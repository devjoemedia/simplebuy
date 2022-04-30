import React, { useEffect } from "react";
import Navbar from "components/Navbar/Navbar";
import { getProducts } from "features/products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "app/store";

export const Products = () => {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      products
    </div>
  );
};

export default Products;
