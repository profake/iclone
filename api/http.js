import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(limit) {
  let fetchMsg = "/products";
  limit !== null ? (fetchMsg = fetchMsg + "?limit=" + limit) : fetchMsg;

  try {
    const response = await axios.get(BASE_URL + fetchMsg);
    // console.log("Axios success: " + response);

    const products = [];

    for (const key in response.data) {
      const product = {
        id: key,
        title: response.data[key].title,
        price: response.data[key].price,
        description: response.data[key].description,
        category: response.data[key].category,
        image: response.data[key].image,
      };
      products.push(product);
    }
    
    return products;
  } catch (error) {
    console.log("Axios failure: " + error);
    console.error(error);
  }

  return [];
}