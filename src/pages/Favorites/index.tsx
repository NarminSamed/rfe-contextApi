import { Card } from 'antd';
import { useFavorites } from '../../context/FavoritesContext.tsx';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {favorites.map((product) => (
        <Card
          key={product?.id}
          title={product?.name}
          style={{ width: 300 }}
        >
          <p>Price: {product?.price}</p>
        </Card>
      ))}
    </div>
  );
};

export default Favorites;
