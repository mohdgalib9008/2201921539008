import React from 'react';
import ProductList from '../components/ProductList';
import { Container, Typography } from '@mui/material';

const AllProductsPage = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      All Products
    </Typography>
    <ProductList />
  </Container>
);

export default AllProductsPage;
