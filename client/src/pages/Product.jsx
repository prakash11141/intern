import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useParams } from "react-router-dom";

// const Product = () => {
//   const { categoryId } = useParams();
//   const [userData, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/api/products")
//       .then((response) => {
//         setData(response.data);
//         console.log(response);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the data!", error);
//       });
//   }, []);

const Product = () => {
  const { categoryId } = useParams(); // Get categoryId from URL params
  const [userData, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Construct your API endpoint based on the categoryId
        const response = categoryId
          ? await axios.get(
              `http://localhost:4000/api/products/category/${categoryId}`
            )
          : await axios.get("http://localhost:4000/api/products");

        setData(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId]); // Fetch when categoryId changes
  return (
    <div className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
          Products
        </h2>
        <div className="flex space-x-6 overflow-x-auto">
          {userData.length > 0 ? (
            userData.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
