import React, { Fragment } from 'react'
import { Grid, Typography } from '@mui/material';
import BookItem from './BookItem';
import { Box } from '@mui/system';
const BookList = ({data, featuredPage}) => {
  return (
    <Fragment>
      {featuredPage &&(
        <Box padding={2}
        margin={"auto"}
        marginBottom="10px"
        boxShadow="10px 10px 20px #ccc"
        bgcolor={"#3d2870"}
        display="flex"
        flexDirection={"column"}
        justifyContent= "center"> 
          <Typography fontFamily={"Neucha"} color="white" textAlign="center" variant='h2'>
            Featured Section
          </Typography>
        </Box>
      )
        
      }
    <div>
       
        <Grid justifyContent={featuredPage ? "center": "flex-start"} padding={1} spacing = {2} container>
{ data.map((book)=> (
    <Grid xs={6} sm={4} md={3} lg={2} height={featuredPage ? "500px" : "400px"} width={"100%"} item key={book._id}>

        <BookItem 
        title={book.title}
        author={book.author}
        price={book.price}
        id = {book._id}
        imageUrl = {book.imageUrl}
        featured = {book.featured}
        ></BookItem>
       
    </Grid>
))}
        </Grid>
    </div>
    </Fragment>
  );
}

export default BookList