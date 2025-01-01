/* eslint-disable react/prop-types */
import AddBtn from '../../Components/AddBtn';
import { useBooksContext } from '../../context/BooksContext';
import styles from './Book.module.css'
import { Link } from 'react-router-dom';
function Book({ book }) {



    const { completedBooks } = useBooksContext();

    const read = completedBooks?.some(b => b.id === book.id);




    return (

        <div className={styles.list} >
            <Link
                to={`/books/${book.id}`}
                state={{ book }}
                className={styles.bookLink}
            >

                <div className={styles.item}>
                    <div className={styles.div1}>
                        <img
                            src={book?.volumeInfo?.imageLinks?.thumbnail || "/images/not-avail-img.png"} />
                    </div>
                    <div className={styles.div2}>
                        <h2>
                            <b>

                                {book?.volumeInfo?.title || "not available"}
                                <br /> (<i>{book?.volumeInfo?.authors?.at(0) || "not available"})
                                </i>
                            </b>
                        </h2>
                    </div>
                    <div className={styles.div3}></div>
                    <div className={styles.div4}>
                        {read ? <button disabled={true} className={styles.completedBtn}>&#10004;</button> : <AddBtn book={book} text="&#10004;" />}
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Book
