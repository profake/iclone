import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts(limit) {
  let fetchMsg = "/products";
  limit !== null ? (fetchMsg = fetchMsg + "?limit=" + limit) : fetchMsg;
  const response = await axios.get(BASE_URL + fetchMsg);
  console.log(response.data);
  return response.data;
}
