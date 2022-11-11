import axios from "axios";

export const getAllBooks = async () => {
  const response = await axios.get("http://localhost:3000/api/books");
  if (response.status !== 200) {
    return new Error("Internal Server Error");
  }
  const data = await response.data?.books;
  return data;
};

export const getFeaturedBooks = async () => {
  const books = await getAllBooks();
  if (books.length == 0) {
    return [];
  }

  const featuredBooks = books.filter((book) => book.featured === true);
  return featuredBooks;
};


export const addNewBook = async(data) => {
  const res = await axios.post("http://localhost:3000/api/books",
  {
    title:data.title,
    author: data.author,
    imageUrl : data.imageUrl,
    price: Number(data.price),
    featured: Boolean(data.featured),
  });
  if (res.status !==201) {
    return new Error("Request to Database is Rejected");
  }
  const bookData = await res.data;
  return bookData;
};


export const getBookFromId = async (id) => {
  const res = await axios.get(`http://localhost:3000/api/book/${id}`);
  if (res.status !==200) {
    return new Error("Book with given Id not Found");
  }
  const getBookData = await res.data;
  return getBookData.book;

}


export const updateBook= async (id, data) => {
  const res = await axios.put(`http://localhost:3000/api/book/${id}`,
  {
    title:data.title,
    author: data.author,
    imageUrl : data.imageUrl,
    price: Number(data.price),
    featured: Boolean(data.featured),
  }
  );
  if (res.status !==200) {
    return new Error("Book can not be Updated");
  }
  const updateBookData = await res.data;
  return updateBookData;
}


export const deleteBook = async (id) => {
  const res = await axios.delete(`http://localhost:3000/api/book/${id}`);
  if (res.status !==200) {
    return new Error("Book can not be Deleted");
  }
  const deleteData = await res.data;
  return deleteData;

}