import { useRouter } from 'next/router'
import React from 'react'
import { addNewBook } from '../api-helpers/frontend/utils'
import Form from './Form'

const Add = () => {
    const router = useRouter();
    const getFormData = (data) => 
    {
        addNewBook(data).then((value) => console.log(value))
        .then(()=> router.push("/books"))
        .catch((err)=> console.log(err));
    }
  return (
    <div>
        <Form onSubmit={getFormData}/>
    </div>
  )
}

export default Add