import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <Card sx={{ maxWidth: 345 }}>
    <Link to={`/product/${product.id}`}>
      <CardMedia
        component="img"
        height="140"
        image={product.image || 'https://via.placeholder.com/150'}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.company} | {product.category}
        </Typography>
        <Typography variant="body1">
          ${product.price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {product.rating} | Discount: {product.discount}%
        </Typography>
      </CardContent>
    </Link>
  </Card>
);

export default ProductCard;
