import { useEffect, useState } from "react";

function useBook(bookId) {
    const [book, setBook] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const apiKey = 'AIzaSyCdUQUDnfjlue8T7o-hY-RFVu8CO-jaii4';

    useEffect(() => {
        if (!bookId) return;

        const controller = new AbortController();

        async function fetchBook() {
            try {
                setIsLoading(true);
                setError("");

                const res = await fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}?key=${apiKey}`, { signal: controller.signal });
                if (!res.ok) throw new Error("Something went wrong while fetching book data");

                const data = await res.json();
                setBook(data);

            } catch (err) {
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                setIsLoading(false);
            }
        }

        fetchBook();

        return () => controller.abort();
    }, [bookId]);

    return { book, isLoading, error };
}

export default useBook;
