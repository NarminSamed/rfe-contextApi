import React, { useEffect, useState } from "react";
import { Card, Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import axios from "axios";
import { useFavorites } from "../../context/FavoritesContext.tsx";
import { Link } from "react-router-dom";

const Product: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const isFavorite = (product: {
    id: number;
    title: string;
    price: number;
    image: string;
  }) => {
    return favorites.some((fav) => fav.id === product.id);
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "30px",
        justifyContent: "center",
      }}
    >
      {products.map((product) => (
        <Card
          hoverable
          key={product?.id}
          cover={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
              }}
            >
              <img
                alt={product.title}
                src={product.image}
                style={{
                  maxWidth: "100px",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          }
          extra={
            <Button
              type="link"
              icon={
                isFavorite(product) ? (
                  <HeartFilled style={{ color: "red" }} />
                ) : (
                  <HeartOutlined />
                )
              }
              onClick={() => toggleFavorite(product)}
            />
          }
          style={{ width: 300 }}
        >
          <Link to={`/product/${product.id}`}>
            <Card.Meta title={product.title} />
          </Link>
          <p>Price: ${product?.price}</p>
        </Card>
      ))}
    </div>
  );
};

export default Product;
