import { useLocation, useNavigate } from "react-router-dom"
import styles from './BookDetails.module.css'
import Logo from "../../Components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser, } from "@fortawesome/free-solid-svg-icons";
import FavoriteBtn from "../../Components/FavoriteBtn";
import { useBooksContext } from "../../context/BooksContext";
import AddBtn from "../../Components/AddBtn";
import ModalRemove from "../../lib/ModalRemove";
import ModalConfirm from "../../lib/ModalConfirm";
import toast from "react-hot-toast";
import { AnimatedSection } from "../../lib/AnimatedSection";


function BookDetails() {
    const location = useLocation();
    const book = location.state?.book;
    const Navigate = useNavigate();
    const { completedBooks, setRemoveModalOpen, favoriteBooks, setFavoriteBooks, handleAddCompletedBook } = useBooksContext();
    const completed = (completedBooks?.some?.(b => b.id === book.id))
    const favorite = (favoriteBooks?.some?.(b => b.id === book.id))




    function handleDelete(e, book) {
        e.preventDefault();
        e.stopPropagation();
        let updatedFavoriteBooks;
        updatedFavoriteBooks = favoriteBooks.filter(b => b.id !== book.id);
        setFavoriteBooks(updatedFavoriteBooks);
        setRemoveModalOpen(false);
        toast('Removed from favorite List!', {
            icon: '🚮',
        });
    }

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.backArrow} onClick={() => Navigate(-1)}> <FontAwesomeIcon icon={faArrowLeft} color="inherit" /></div>
                <Logo />

                <div className={styles.userIcon}
                    onClick={() => Navigate('/user')}>
                    <FontAwesomeIcon icon={faUser} size="2x" />
                </div>
            </nav>

            <AnimatedSection direction="top">

                <div className={styles.detailsContainer}>
                    <ModalRemove
                        btn1Color="neutral"
                        btn2Color="danger"
                        text="remove from favorite?"
                        onConfirm={(e) => handleDelete(e, book)} />

                    <ModalConfirm text="Add to read?"
                        btn1Color="neutral"
                        btn2Color="warning"
                        onConfirm={(e) => handleAddCompletedBook(e, book)} />


                    <div className={styles.detailPage}>
                        <div className={styles
                            .icon
                        }>
                            <p>{completed &&
                                (favorite ? "favorite" : "add to favorite")
                            }
                            </p>



                            {completed &&
                                <FavoriteBtn book={book} />}
                        </div>
                        <div className={styles.bookImg}>



                            <img src={book?.volumeInfo?.imageLinks?.thumbnail || "/images/not-avail-img.png"} alt={book.volumeInfo.title} />
                        </div>

                        <div className={styles.bookInfo}>
                            {!completed && <AddBtn text="add" book={book} />}
                            <h2>{book.volumeInfo.title || "Unknown"}</h2>
                            <p><strong>Authors:</strong> {book.volumeInfo.authors?.join(', ') || "not available"}</p>
                            <p><strong>Published Date:</strong> {book.volumeInfo?.publishedDate || "not available"}</p>

                            {book.volumeInfo.pageCount > 0 && <p>pages :{book.volumeInfo.pageCount || "not available"}</p>}
                        </div>


                        <div className={styles.description}>
                            <p><strong>Description:</strong> {book.volumeInfo?.description || "not available"}</p>
                        </div>

                    </div>

                </div>
            </AnimatedSection>

        </>

    );
}

export default BookDetails
