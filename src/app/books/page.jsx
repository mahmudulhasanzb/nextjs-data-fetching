import BookCard from '@/components/BookCard';
import React from 'react';

const BooksPage = async () => {

  const res = await fetch('http://localhost:5000/books', {next: {revalidate: 9}});
  const books = await res.json()

  return (
    <div className='mt-5 mb-5'>
      <h1 className='text-center text-3xl font-semibold mb-5'>BooksPage</h1>
      <h2 className='text-center text-xl font-semibold mb-10'>Books length: {books.length}</h2>
      <div className='grid grid-cols-3 gap-4'>
        {
          books.map(book => <BookCard key={book.id} book={book}></BookCard>)
        }
      </div>
    </div>
  );
};

export default BooksPage;
