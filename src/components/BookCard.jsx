import Link from 'next/link';
import React from 'react'

const BookCard = ({ book }) => {
  const {id, title, author, price } = book
  return (
    <div className="card bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{author}</p>
        <p>${price} </p>
        <div className="justify-end card-actions">
          <Link className='btn' href={`/books/${id}`}>Book Detail</Link>
        </div>
      </div>
    </div>
  );
}

export default BookCard