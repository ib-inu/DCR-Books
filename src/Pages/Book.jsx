/* eslint-disable react/prop-types */
import styles from './Book.module.css'
import { Link } from 'react-router-dom';
function Book({ book, onAddCompleted }) {


    function decodeHtml(html) {
        const txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }

    function stripHtml(html) {
        if (!html) return "";

        // Remove any HTML tags
        const strippedHtml = html.replace(/<\/?[^>]+(>|$)/g, "");

        // Decode HTML entities
        return decodeHtml(strippedHtml);
    }



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
                            src={book?.volumeInfo?.imageLinks?.thumbnail} />
                    </div>
                    <div className={styles.div2}>
                        <p>
                            <b>

                                {book?.volumeInfo?.title} by {book?.volumeInfo?.authors?.join(', ')}
                            </b>
                        </p>
                    </div>
                    <div className={styles.div3}>
                        <p>
                            {stripHtml(book.searchInfo?.textSnippet)}
                        </p>
                    </div>
                    <div className={styles.div4}>
                        <button onClick={() => onAddCompleted(book)} className={styles.btnAdd}>add</button>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Book
