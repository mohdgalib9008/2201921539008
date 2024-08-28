import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api';
import ProductCard from './ProductCard';
import { Grid } from '@mui/material';
import FilterBar from './FilterBar';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts(filters);
      setProducts(data);
    };
    getProducts();
  }, [filters]);

  return (
    <div>
      <FilterBar setFilters={setFilters} />
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
