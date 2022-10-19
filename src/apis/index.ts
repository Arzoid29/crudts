
import get from "axios";
import axios from "axios";
import { Product } from "../Components/Product/Product";
import { IItem } from "../interfaces";
const API_URL = "https://dummyjson.com/products";
interface Product {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: Array<string>;
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}

export function getAllProducts() {
  return new Promise((success, reject) => {
    get(`${API_URL}`)
      .then(({ data }: { data: any }) => {
        console.log("API correctly fetching");
        const finalData: Array<IItem> = [];
        data.products.map((product: Product) => {
          finalData.push({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
          });
        });
        success(finalData);
      })
      .catch((error: any) => {
        console.log("API Error");
        reject(error);
      });
  });
}

export function getProductById(id: string) {
  return new Promise((success, reject) => {
    get(`${API_URL}/${id}`)
      .then(({ data }: { data: Product }) => {
        console.log("API correctly fetching");
        success(data);
      })
      .catch((error: any) => {
        console.log("API Error");
        reject(error);
      });
  });
}

export function addNewProduct(data: {}) {
  return new Promise((success, reject) => {
    axios
      .post(`${API_URL}/add`, {
        headers: { "Content-Type": "application/json" },
        data: { data },
      })
      .then(({ data }: { data: any }) => {
        console.log("API correctly posting");
        success(data);
      })
      .catch((error: any) => {
        console.log("API Error");
        reject(error);
      });
  });
}
