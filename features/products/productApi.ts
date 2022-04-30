import firebaseDB from "database/firebaseConfig";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const fetchProducts = async () => {
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
