/* eslint-disable react/prop-types */
import { useBooksContext } from '../context/BooksContext';
import styles from './AddBtn.module.css'


function AddBtn({ text, book }) {
    const { setConfirmModalOpen, setSelectedBook } = useBooksContext();




    const handleButtonClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setSelectedBook(book)
        setConfirmModalOpen(true);
    };



    return (
        <>
            <button onClick={(e) => handleButtonClick(e)} className={styles.btnAdd}> {text}</button>

        </>
    )
}

export default AddBtn

