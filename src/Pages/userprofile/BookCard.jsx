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
    const displayName = bookName?.length > 18 ? `${bookName.slice(0, 16)}..` : bookName;



    const isSmallScreen = window.innerWidth <= 500;

    function handleClick(e, id) {
        e.stopPropagation();
        setSelectedBook(id);
        setRemoveModalOpen(true)
    }

    return (
        <AnimatedSection direction="top">

            <Card variant="smooth" sx={{
                maxWidth: 320, bgcolor: '#16161677'
            }}>


                <CardOverflow>
                    <Link
                        to={`/books/${book.id}`}
                        state={{ book }}>
                        <AspectRatio ratio="1">
                            <img
                                src={book?.volumeInfo?.imageLinks?.thumbnail || "/images/not-avail-img.png"}
                                loading="lazy"
                                alt=""
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
                            opacity: 0.6,
                            color: '#fffefe'
                        }}
                    >
                        🗑️
                    </IconButton>

                </CardOverflow>
                <div>
                    <h2 style={{
                        color: '#dfdfdfb6',
                        fontSize: isSmallScreen ? '18px' : '24px'
                    }} >
                        {displayName || "Unknown"}
                    </h2>
                </div>
            </Card >
        </AnimatedSection>

    );
}


export default BookCard
