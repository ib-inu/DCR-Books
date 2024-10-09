import Logo from "../../Components/Logo"
import styles from './Books.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import Book from "./Book";
import { useNavigate } from "react-router-dom";
import useBooks from "../../Custom Hooks/useBooks";
import Loader from "../../Components/Loader";
import { useState } from "react";
import { useBooksContext } from "../../context/BooksContext";
import ModalConfirm from "../../lib/ModalConfirm";
import ErrorMsg from "../../ErrorMsg";

function Books() {

    const [query, setQuery] = useState('');
    const { searchQuery, handleAddCompletedBook, setSearchQuery, selectedBook } = useBooksContext();
    const { data: books, isLoading, error } = useBooks(searchQuery);
    const [page, setPage] = useState(1);
    const perPage = 5;
    const Navigate = useNavigate();

    const startIdx = (page - 1) * perPage;
    const endIdx = startIdx + perPage;
    const currentBooks = books?.slice(startIdx, endIdx);
    const totalPage = Math.ceil((books?.length || 0) / perPage);

    if (error) {
        return <ErrorMsg message="An error occurred while fetching the books." />;
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (!query.length > 1) return;
        setSearchQuery(query);
        setPage(1);
    }

    const handleNextPage = () => {
        if (page < totalPage) setPage(page + 1)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handlePrevPage = () => {
        if (page > 1) setPage(page - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };




    return (
        <div>
            <ModalConfirm text="Add to read?"
                btn1Color="neutral"
                btn2Color="warning"
                onConfirm={(e) => handleAddCompletedBook(e, selectedBook)} />
            <nav className={styles.nav}>
                <Logo />

                <div className={styles.userIcon} onClick={() => Navigate("/user")} >
                    <FontAwesomeIcon icon={faUser} size="2x" />
                </div>
            </nav >

            <form onSubmit={(e) => handleSearch(e)} className={styles.searchBar}>
                <input
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    type="search" placeholder="search" />
                <button>
                    <FontAwesomeIcon icon={faSearch} color="#22282b" />
                </button>
            </form>

            <div className={styles.content}>

                {!query && !books?.length &&
                    <div className={styles.welcome}>
                        <p className={styles.message}>*start tracking📖*</p>
                    </div>
                }

                {isLoading && <Loader />}

                {!isLoading && !error && currentBooks?.map(book => <Book book={book} key={book.etag} />
                )

                }
                <div className={styles.paginationBtns}>

                    {books?.length >= 1 && !error && !isLoading && (
                        <>
                            {page > 1 && (
                                <button onClick={handlePrevPage}>prev&larr;</button>
                            )}
                            {page <= 1 && (
                                <button onClick={handleNextPage}>&rarr;next</button>
                            )}
                        </>
                    )}
                </div>
            </div>

        </div >
    )
}

export default Books
