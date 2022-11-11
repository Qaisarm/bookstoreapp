import Book from "../api-helpers/model/Book";
import BookList from "../components/BookList";

import  {connectToDb} from "../api-helpers/utils"; 
function Home({books}){
  return (
    <BookList featuredPage data = {books}/>
  );
}
export default Home;

export const getStaticProps = async () => {
await  connectToDb();
  
  let books;
  try {
    books = await Book.find();
    
  } catch (error) {
    return new Error(error);
  }
  const result = JSON.stringify(books);
  const data = JSON.parse(result);

  const featuredBooks = data.filter((book) => book.featured === true);

  return{
    props:{
      books: featuredBooks,
    },
    revalidate: 10,
  };

};