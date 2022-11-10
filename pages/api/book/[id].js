import {
  deleteBook,
  getBookById,
  updateBook,
} from "../../../api-helpers/controllers/books-controller";
import { connectToDb } from "../../../api-helpers/utils";

export default async function handler(req, res) {
  await connectToDb();
  if (req.method === "PUT") {
    return updateBook(req, res);
  } else if (req.method === "DELETE") {
    return deleteBook(req, res);
  } else if( req.method ==="GET"){
    return getBookById(req, res);
  }
}
