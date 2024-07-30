import React from "react";
import { Card, Button } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useFavorites } from "../../context/FavoritesContext.tsx";

const Product: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
    { id: 4, name: "Product 4", price: "$100" },
    { id: 5, name: "Product 5", price: "$130" },
    { id: 6, name: "Product 6", price: "$100" },
  ];

  const isFavorite = (product: { id: number; name: string; price: string }) => {
    return favorites.some((fav) => fav.id === product.id);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.name}
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
          <p>Price: {product.price}</p>
        </Card>
      ))}
    </div>
  );
};

export default Product;
