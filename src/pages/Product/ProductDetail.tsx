import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card } from "antd";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      {product && (
        <Card
          title={product.title}
          cover={
            <img
              alt={product.title}
              src={product.image}
              style={{
                maxWidth: "300px",
                maxHeight: "300px",
                objectFit: "contain",
              }}
            />
          }
        >
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </Card>
      )}
    </div>
  );
};

export default ProductDetail;
