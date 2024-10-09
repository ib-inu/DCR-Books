/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styles from './FavoriteBtn.module.css'
import { useBooksContext } from '../context/BooksContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';

function FavoriteBtn({ book }) {

    const { setRemoveModalOpen, setFavoriteBooks } = useBooksContext()


    const handleToggleFavoriteBook = (e, book) => {
        e.preventDefault();
        e.stopPropagation();
        const isFavorite = favoriteBooks?.some?.(b => b.id === book.id);

        let updatedFavoriteBooks;
        if (isFavorite) {
            setRemoveModalOpen(true);
        } else {
            toast.success("Added to favorite")
            updatedFavoriteBooks = [...favoriteBooks, book];
            setFavoriteBooks(updatedFavoriteBooks);
        }

    };


    const [fav, setFav] = useState(false);
    const { favoriteBooks, setConfirmModalOpen } = useBooksContext();

    useEffect(() => {
        const isFav = favoriteBooks?.some?.(f => f.id === book.id);
        setFav(isFav);
    }, [favoriteBooks, book.id]);



    return (

        <span className={`${styles.fav} ${fav && styles.favActive}`}
            onClick={(e) => handleToggleFavoriteBook(e, book)}
        >
            <FontAwesomeIcon icon={faHeart} />
        </span>
    )
}

export default FavoriteBtn
