import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";


const apiKey = 'AIzaSyCdUQUDnfjlue8T7o-hY-RFVu8CO-jaii4';


const fetchBooks = async (query) => {
    if (!query) return [];
    const { data } = await axios.get(` https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`);
    if (!data.items) throw new Error('Book not Found');
    return data.items
}



function useBooks(query) {
    const [debouncedQuery, setDebouncedQuery] = useState(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(query)
        }, 500)
        return () => {
            clearTimeout(handler)
        }
    }, [query])

    return useQuery(["books", debouncedQuery], () => fetchBooks(debouncedQuery), {
        enabled: !!debouncedQuery,
        retry: false,
    })
}





export default useBooks
