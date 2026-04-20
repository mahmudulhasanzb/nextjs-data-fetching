export const generateStaticParams = async () => {
  const res = await fetch('http://localhost:5000/books');
  const books = await res.json();

  // Wrong: [1, 2, 3, 4, 5]
  // Correct: [ {bookId: 1}, {bookId: 2} ... ]

  return books.slice(1, 3).map(book => ({ bookId: book.id }));
};

const BookDetailPage = async ({ params }) => {
  const { bookId } = await params;

  const res = await fetch(`http://localhost:5000/books/${bookId}`);
  const { title, author, price } = await res.json();

  return (
    <div>
      <h1> Book Details: {bookId}</h1>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default BookDetailPage;
