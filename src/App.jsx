import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./Pages/HomePage"
import Overview from "./Pages/Overview"
import About from "./Pages/About"
import Contribute from "./Pages/Contribute"
import Books from "./Pages/Books"
import BookDetails from "./Pages/BookDetails"
import Profile from "./Pages/Profile"
import { useState } from "react"


function App() {



  const [completedBooks, setCompletedBooks] = useState([]);
  const [favoriteBooks, setFavoriteBooks] = useState([]);


  // Add book to favorite list
  const handleToggleFavoriteBook = (book) => {
    const isFavorite = favoriteBooks.some(b => b.id === book.id);

    let updatedFavoriteBooks;
    if (isFavorite) {
      updatedFavoriteBooks = favoriteBooks.filter(b => b.id !== book.id);
    } else {
      updatedFavoriteBooks = [...favoriteBooks, book];
    }

    setFavoriteBooks(updatedFavoriteBooks);
    localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavoriteBooks));
  };



  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="overview" element={<Overview />} />
        <Route path="about" element={<About />} />
        <Route path="contribute" element={<Contribute />} />
        <Route path="books" element={<Books
          completedBooks={completedBooks}
          favoriteBooks={favoriteBooks}
          setCompletedBooks={setCompletedBooks}
          setFavoriteBooks={setFavoriteBooks}
        />} />
        <Route path="books/:id" element={<BookDetails
          favoriteBooks={favoriteBooks}
          onAddFavorite={handleToggleFavoriteBook}
        />} />
        <Route path="user" element={<Profile
          completedBooks={completedBooks}
          favoriteBooks={favoriteBooks}
          setCompletedBooks={setCompletedBooks}
          setFavoriteBooks={setFavoriteBooks}
        />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App