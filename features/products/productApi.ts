import firebaseDB from "database/firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { productInterface } from "lib/types";

const baseUrl = "http://localhost:1337/api/products";

export const fetchProducts = async () => {
  // let products = await fetch(baseUrl + "?populate=imageUrl")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     if (data.length) {
  //       localStorage.setItem("products", JSON.stringify(data));
  //     }
  //     return data;
  //   });

  // return products;

  const q = query(collection(firebaseDB, "products"));

  const querySnapshot = await getDocs(q);
  let products: any = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });

  return products;
};

export const fetchProduct = async (id: string) => {
  const docRef = doc(firebaseDB, "products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    let product = docSnap.data();
    return { ...product, id: docSnap.id };
  } else {
    return "Document not found!";
  }
};
