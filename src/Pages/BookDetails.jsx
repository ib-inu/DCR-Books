/* eslint-disable react/prop-types */
import { useLocation, useNavigate } from "react-router-dom"
import styles from './BookDetails.module.css'
import Logo from "../Componets/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart, faUser, } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";



function BookDetails({ onAddFavorite, favoriteBooks }) {
    const location = useLocation();
    const book = location.state?.book;
    const Navigate = useNavigate();

    const [fav, setFav] = useState(false);

    useEffect(() => {
        const isFav = favoriteBooks.some(f => f.id === book.id);
        setFav(isFav);
    }, [favoriteBooks, book.id]);




    if (!book) {
        return <p>No Book details Available</p>
    }
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.backArrow} onClick={() => Navigate(-1)}> <FontAwesomeIcon icon={faArrowLeft} color="white" /></div>
                <Logo />

                <div className={styles.userIcon}
                    onClick={() => Navigate('/user')}>
                    <FontAwesomeIcon icon={faUser} size="2x" />
                </div>
            </nav>

            <div className={styles.detailsContainer}>

                <span className={fav ? styles.favActive : styles.fav}
                    onClick={() => onAddFavorite(book)}
                >
                    <FontAwesomeIcon icon={faHeart} />
                </span>


                <div className={styles.bookCover}>
                    <div className={styles.bookCover1}>
                        <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
                        <p><strong>Published Date:</strong> {book.volumeInfo.publishedDate}</p>
                        <p>pages :{book.volumeInfo.pageCount}</p>
                    </div>
                    <div className={styles.bookCover2}>
                        <h2>{book.volumeInfo.title}</h2>
                        <p><strong>Authors:</strong> {book.volumeInfo.authors?.join(', ')}</p>
                    </div>


                </div>
                <div className={styles.description}>
                    <p><strong>Description:</strong> {book.volumeInfo.description}</p>

                </div>

            </div>
        </>

    );
}

export default BookDetails
