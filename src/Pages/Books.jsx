/* eslint-disable react/prop-types */
import Logo from "../Componets/Logo"
import styles from './Books.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import useBooks from "../Custom Hooks/useBooks";
import Book from "./Book";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";

function Books({ completedBooks, setCompletedBooks }) {

    const [query, setQuery] = useState('');
    const { books, isLoading, error } = useBooks(query);

    const Navigate = useNavigate();


    // Add book to completed list
    const handleAddCompletedBook = (book) => {
        if (!completedBooks.some(b => b.id === book.id)) {
            const updatedCompletedBooks = [...completedBooks, book];
            setCompletedBooks(updatedCompletedBooks);
            localStorage.setItem('completedBooks', JSON.stringify(updatedCompletedBooks));
        }
    };






    return (
        <div>
            <nav className={styles.nav}>
                <Logo />
                <form onSubmit={(e) => e.preventDefault()}
                    className={styles.searchBar}>
                    <input
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        type="search" placeholder="search" />
                </form>
                <div className={styles.userIcon} onClick={() => Navigate("/user")} >
                    <FontAwesomeIcon icon={faUser} size="2x" />
                </div>
            </nav >


            <div className={styles.content}>
                {!query && <div className={styles.welcome}>
                    <p>find the books you need📖</p>
                </div>}
                {isLoading && <Loader />}

                {!isLoading && !error && books.map(book => <Book
                    onAddCompleted={handleAddCompletedBook}
                    book={book} key={book.etag} />
                )}


                {query && error && <ErrorMessage message={error} />}






            </div>
        </div >
    )
}

export default Books
