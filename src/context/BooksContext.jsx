/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../Custom Hooks/useLocalStorageState";
import toast from "react-hot-toast";


const BooksContext = createContext();

function BooksProvider({ children }) {
    const [completedBooks, setCompletedBooks] = useLocalStorageState([], "completedBooks");
    const [favoriteBooks, setFavoriteBooks] = useLocalStorageState([], "favoriteBooks");
    const [searchQuery, setSearchQuery] = useState("");
    const [confirmModalOpen, setConfirmModalOpen] = useState(false);
    const [removeModalOpen, setRemoveModalOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);

    const handleAddCompletedBook = (e, book) => {
        e.preventDefault();
        e.stopPropagation();
        if (!completedBooks?.some(b => b.id === book.id)) {
            const updatedCompletedBooks = [...completedBooks, book];
            setCompletedBooks(updatedCompletedBooks);
        }
        setConfirmModalOpen(false);
        toast.success('Successfully added!')

    };




    return (
        <BooksContext.Provider value={{
            setFavoriteBooks,
            completedBooks,
            setCompletedBooks,
            favoriteBooks,
            searchQuery,
            setSearchQuery,
            confirmModalOpen,
            setConfirmModalOpen,
            selectedBook,
            setSelectedBook,
            setRemoveModalOpen,
            removeModalOpen,
            handleAddCompletedBook
        }}>
            {children}
        </BooksContext.Provider>
    )

}

function useBooksContext() {
    const context = useContext(BooksContext);
    if (context === undefined) throw new Error("BooksContext was used outside of BooksProvider")
    return context
}

export { useBooksContext, BooksProvider }