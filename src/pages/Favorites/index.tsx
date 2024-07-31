import { Card, Button } from "antd";
import { useFavorites } from "../../context/FavoritesContext.tsx";
import { CloseOutlined } from "@ant-design/icons";

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {favorites.map((product) => (
        <Card
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
                <CloseOutlined onClick={() => removeFavorite(product.id)} />
              }
            />
          }
          title={product?.title}
          style={{ width: 300 }}
        >
          <p>Price: {product?.price}</p>
        </Card>
      ))}
    </div>
  );
};

export default Favorites;
