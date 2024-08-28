import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../api';
import { Container, Typography, Card, CardMedia, CardContent } from '@mui/material';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductById(id);
      setProduct(data);
    };
    getProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container>
      <Card sx={{ maxWidth: 600 }}>
        <CardMedia
          component="img"
          height="300"
          image={product.image || 'https://via.placeholder.com/300'}
          alt={product.name}
        />
        <CardContent>
          <Typography variant="h4" component="div">
            {product.name}
          </Typography>
          <Typography variant="h6">
            {product.company} | {product.category}
          </Typography>
          <Typography variant="body1">
            Price: ${product.price}
          </Typography>
          <Typography variant="body1">
            Rating: {product.rating}
          </Typography>
          <Typography variant="body1">
            Discount: {product.discount}%
          </Typography>
          <Typography variant="body1">
            Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetailPage;
