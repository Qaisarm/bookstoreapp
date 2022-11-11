import React, { useState, Fragment } from "react";
import EditOffIcon from '@mui/icons-material/EditOff';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Snackbar,
  Alert
} from "@mui/material";
import Link from "next/link";
import { deleteBook } from "../api-helpers/frontend/utils";
import { useRouter } from "next/router";
const BookItem = ({ title, author, price, id, imageUrl, featured }) => {
const router =useRouter();
  const [open, setOpen] = useState(false);
  const handleDelete = () => {
    deleteBook(id)
    .then(()=> setOpen(true))
    .catch((err)=> console.log(err))
  }
  return (
    <Fragment>
    <Card
    sx={{
      width: "100%",
      height: "100%",
      borderRadius: 3,
      boxShadow: "5px 5px 10px #ccc",
      ":hover": { boxShadow: "10px 10px 20px #ccc" },
      
    }}>

      <div style={{ width: "100%", height: "50%", position: "relative" }}>
        { featured &&(
          <div style={{ position: "absolute", top: "0", background: "#c83576", color:"white",
          width: "70px", padding:"2px"
        }}>Featured</div>
        )}
        <img src={imageUrl} alt={title} width={"100%"} height="100%" />
      </div>
      <CardContent sx={{ width: "100%", height: "30%" }}>
        <Typography fontFamily={"Neucha"} gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography fontFamily={"Neucha"}
        fontSize= "22px"
        width="300px"
        variant="body2" color="text.secondary">
          {author}
        </Typography>
        <Typography sx={{mt:1}}
        fontFamily="monospace"
        fontWeight="bold"
        > {`Best Buy: ${price} SEK`}</Typography>
      </CardContent>

      <CardActions sx={{marginRight:'auto'}}>
      <Link href={`/books/${id}/`}>
        <Button  endIcon ={<EditOffIcon/>} size="small" color="warning">
          Edit
        </Button>
      </Link>
       
        <Button endIcon ={<DeleteForeverIcon/>} onClick={handleDelete} size="small" color="error">
          Delete
        </Button>
        
      </CardActions>
    </Card>
{ open &&(
    <Snackbar open={open} autoHideDuration={2000}
     onClose={()=> {
      setOpen(false);
      router.push("/books")
    }}>
  <Alert onClose={()=> setOpen(false)} severity="success" sx={{ width: '100%' }}>
    The Book has been Successfully Deleted!
  </Alert>
</Snackbar>
)}
        </Fragment>
  );
};

export default BookItem;
