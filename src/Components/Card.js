import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';

import { Button, CardActionArea, CardActions, Grid } from '@mui/material';

function MultiActionAreaCard({ image, title, description }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
        />
        
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        
        </Button>
      </CardActions>
    </Card>
  );
}

export default function MultiActionAreaCardGrid() {
  const cardData = [
    {
      image: 'http://www.pngall.com/wp-content/uploads/2016/04/Education-Download-PNG.png',
      
      
    },
    {
      image: 'https://thumbs.dreamstime.com/b/medical-word-written-wood-block-table-65997362.jpg',
      
    },
    {
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/LX/GK/EM/53690568/photo-frame-metal-keychain-h529.jpg',
      
    },
    // Add more card data as needed
  ];

  return (
    <Grid container spacing={2}>
      {cardData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <MultiActionAreaCard {...card} />
        </Grid>
      ))}
    </Grid>
  );
}