import React from 'react';
import { TextField, Button, Grid } from '@mui/material';

const FilterBar = ({ setFilters }) => {
  const [category, setCategory] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [rating, setRating] = React.useState('');
  const [priceRange, setPriceRange] = React.useState('');
  const [availability, setAvailability] = React.useState('');

  const applyFilters = () => {
    setFilters({
      category,
      company,
      rating,
      priceRange,
      availability
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <TextField 
          label="Category" 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField 
          label="Company" 
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField 
          label="Rating" 
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField 
          label="Price Range" 
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField 
          label="Availability" 
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={applyFilters}>Apply Filters</Button>
      </Grid>
    </Grid>
  );
};

export default FilterBar;
