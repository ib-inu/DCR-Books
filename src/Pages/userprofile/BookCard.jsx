/* eslint-disable react/prop-types */
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/joy/IconButton';
import { Link } from 'react-router-dom';
import { useBooksContext } from '../../context/BooksContext';
import { AnimatedSection } from '../../lib/AnimatedSection';

function BookCard({ book }) {
    const { setRemoveModalOpen, setSelectedBook } = useBooksContext();

    const bookName = book?.volumeInfo?.title;
    const displayName = bookName?.length > 22 ? `${bookName.slice(0, 20)}..` : bookName;



    const isSmallScreen = window.innerWidth <= 500;

    function handleClick(e, id) {
        e.stopPropagation();
        setSelectedBook(id);
        setRemoveModalOpen(true)
    }

    return (
        <AnimatedSection direction="top">

            <Card variant="outlined" sx={{
                minHeight: {
                    xs: "100px",
                    sm: "300px",
                    md: "400px"
                },
                background: "rgba(100, 66, 154, 0.09)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                backdropFilter: "blur(2.4px)",
                border: "1px solid rgba(100, 66, 154, 0.35)",
                borderRadius: "16px",
            }}>


                <CardOverflow>
                    <Link
                        to={`/books/${book.id}`}
                        state={{ book }}>
                        <AspectRatio ratio="1">
                            <img
                                src={book?.volumeInfo?.imageLinks?.thumbnail || "/images/not-avail-img.png"}
                                loading="lazy"
                                alt="displayName"
                            />
                        </AspectRatio>
                    </Link>

                    <IconButton
                        onClick={(e) => handleClick(e, book.id)}
                        aria-label="Like minimal photography"
                        size="sm"
                        variant="solid"
                        color="danger"
                        sx={{
                            position: 'absolute',
                            zIndex: 2,
                            borderRadius: '50%',
                            right: '1rem',
                            top: 0,
                            transform: 'translateY(50%)',
                            opacity: 1,
                            color: '#fffefe'
                        }}
                    >
                        🗑️
                    </IconButton>

                </CardOverflow>
                <div>
                    <h2 style={{
                        color: '#dfdfdfb6',
                        fontSize: isSmallScreen ? '18px' : '22px'
                    }} >
                        {displayName || "Unknown"}
                    </h2>
                </div>
            </Card >
        </AnimatedSection>

    );
}


export default BookCard
