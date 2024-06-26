import React, { useEffect, useState } from 'react'
import BookCard from '../component/BookCard';

const OtherBooks = () => {
    const [books, setbooks] = useState([]);
    useEffect(() =>{
        fetch('https://book-store-server-site.vercel.app/all_books')
       .then(res => res.json())
       .then(data => setbooks(data))
    },[]);
    
    return (
        <div>
            <BookCard books={books} headline ="Other Books"/>
        </div>
    )
}

export default OtherBooks