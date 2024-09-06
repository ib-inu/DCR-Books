import { useEffect, useState } from "react";

function useBooks(query) {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const apiKey = 'AIzaSyCdUQUDnfjlue8T7o-hY-RFVu8CO-jaii4';


    useEffect(function () {

        const controller = new AbortController();
        async function fetchBooks() {
            try {
                setIsLoading(true);
                setError("");
                if (!query) return;
                const res = await fetch(` https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`, { signal: controller.signal });
                if (!res.ok) throw new Error("something went wrong with fetching api...");


                const data = await res.json();

                if (data.Response === 'False') throw new Error('Book not Found')


                // const books = data.items.filter(book => {
                //     const isValid = book.volumeInfo.imageLinks?.thumbnail &&
                //         book.volumeInfo.title &&
                //         book.volumeInfo.authors &&
                //         book.searchInfo?.textSnippet;


                //     if (!isValid) {
                //         setError("Invalid Book info found");
                //     }

                //     return isValid;
                // });

                setBooks(data.items);




            } catch (err) {
                if (err.name !== "AbortError")
                    setError(err.message)

            } finally {

                setIsLoading(false);
            }
        }
        fetchBooks();

        return function () {
            controller.abort();
        }
    }, [query]);

    return { books, isLoading, error }
}

export default useBooks
