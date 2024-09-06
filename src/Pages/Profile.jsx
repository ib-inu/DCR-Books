/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Logo from '../Componets/Logo';
import styles from './Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Profile({ setCompletedBooks,
    setFavoriteBooks, favoriteBooks, completedBooks }) {
    const Navigate = useNavigate();

    // States for storing completed and favorite books


    // Load from localStorage on initial render
    useEffect(() => {
        const storedCompletedBooks = JSON.parse(localStorage.getItem('completedBooks')) || [];
        const storedFavoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];
        setCompletedBooks(storedCompletedBooks);
        setFavoriteBooks(storedFavoriteBooks);
    }, [setCompletedBooks, setFavoriteBooks]);





    // Function to remove book from Completed list
    const handleRemoveCompleted = (bookId) => {
        const updatedCompletedBooks = completedBooks.filter(book => book.id !== bookId);
        setCompletedBooks(updatedCompletedBooks);
        localStorage.setItem('completedBooks', JSON.stringify(updatedCompletedBooks));
    };

    // Function to remove book from Favorite list
    const handleRemoveFavorite = (bookId) => {
        const updatedFavoriteBooks = favoriteBooks.filter(book => book.id !== bookId);
        setFavoriteBooks(updatedFavoriteBooks);
        localStorage.setItem('favoriteBooks', JSON.stringify(updatedFavoriteBooks));
    };



    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.backArrow} onClick={() => Navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} color="white" />
                </div>
                <Logo />
                <div></div>
            </nav>
            <div className={styles.container}>

                <div className={styles.section}>
                    <h2>Completed</h2>
                    <div className={styles.list}>
                        {completedBooks.map(book => (
                            <div key={book.id}
                                className={styles.book}>
                                <button className={styles.removeBtn}
                                    onClick={() => handleRemoveCompleted(book.id)}
                                >⛔</button>
                                <Link
                                    to={`/books/${book.id}`}
                                    state={{ book }}
                                    className={styles.bookLink}
                                >
                                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} ></img>
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>
                <div className={styles.section}>


                    <h2>Favorite </h2>
                    <div className={styles.list}>
                        {favoriteBooks.map(book => (
                            <div key={book.id}
                                className={styles.book}
                            >
                                <button className={styles.removeBtn}
                                    onClick={() => handleRemoveFavorite(book.id)}
                                >⛔</button>
                                <Link
                                    to={`/books/${book.id}`}
                                    state={{ book }}
                                    className={styles.bookLink}
                                >
                                    <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                                </Link>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;


