import styles from './Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useBooksContext } from '../../context/BooksContext';
import { BasicSelect as SelectOpt } from './SelectOpt';
import { useState } from 'react';
import BookCard from './BookCard';
import { useNavigate } from 'react-router-dom';
import ModalRemove from '../../lib/ModalRemove';
import toast from 'react-hot-toast';
import { Grid } from '@mui/joy';
import { Box } from '@mui/material';


function Profile() {
    const { setCompletedBooks, setFavoriteBooks, favoriteBooks, completedBooks, selectedBook, setRemoveModalOpen } = useBooksContext();
    const [sort, setSort] = useState("all");
    const navigate = useNavigate();



    const books = (sort === "favorite") ? favoriteBooks : completedBooks;



    const handleRemove = (e, bookId) => {
        e.stopPropagation();
        e.preventDefault();
        if (sort === "favorite") {
            const updatedFav = favoriteBooks.filter(book => book.id !== bookId);
            setFavoriteBooks(updatedFav);
            toast('Removed from favorite List!', {
                icon: '🚮',
            });
        } else {

            const updatedCompleted = completedBooks.filter(book => book.id !== bookId);
            const updatedFav = favoriteBooks.filter(book => book.id !== bookId);
            setCompletedBooks(updatedCompleted);
            setFavoriteBooks(updatedFav);
            toast('Removed Successfully!', {
                icon: '🚮',
            });
        }
        setRemoveModalOpen(false);
    };



    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.backArrow} onClick={() => navigate(-1)}>
                    <FontAwesomeIcon icon={faArrowLeft} color="inherit" />
                </div>
            </nav>

            <ModalRemove onConfirm={(e) => handleRemove(e, selectedBook)} text="       confirm to remove book"
                btn1Color="neutral" btn2Color="danger" />
            <div className={styles.container}>
                <div className={styles.filerContainer}>
                    <SelectOpt value={sort} setValue={setSort} />
                </div>


                <Box sx={{ flexGrow: 1, mt: "25px" }} className={styles.box}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {!books.length ?
                            <div className={styles.empty}>
                                <p >empty...</p>
                            </div>
                            :
                            books.map((book, i) =>
                            (<Grid item xs={3} sm={4} md={4} key={i}>
                                <BookCard key={i} book={book} />
                            </Grid>)
                            )
                        }

                    </Grid>
                </Box>



            </div>
        </div>

    );
}

export default Profile;


