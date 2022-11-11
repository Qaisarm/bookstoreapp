import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { getBookFromId, updateBook } from '../api-helpers/frontend/utils';
import Form from './Form';

const BookDetail = () => {
    const [book, setBook] = useState();
const router = useRouter();
const id = router.query.id;
console.log(router.query);
    useEffect(()=>{
        getBookFromId(id)
        .then((data) => setBook(data))
        .catch((err) => console.log(err));
    }, [router.query.id]);
    console.log(book);
    const getFormData= (data) => {
        updateBook(id,data)
        .then((value)=> console.log(value))
        .then(() => {
            router.push("/");
        })
        .catch((err)=> console.log(err));
    };
  return (
    <div>{book ? <Form data={book} onSubmit={getFormData} />: <p>Loading ...</p>}</div>
  )
}

export default BookDetail