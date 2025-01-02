# DCR-Books

DCR-Books is a book tracking website that allows users to manage the books they have read and create a favorite books list. The application leverages modern technologies to provide a smooth user experience and aesthetic design.

## Features
- **Add Books**: Search for books using the Google Books API and add them to your personal library.
- **Track Reading**: Maintain a list of books you have read.
- **Favorite Books**: Mark books as favorites for easy access.
- **Local Storage**: Persist data across sessions without requiring user authentication.
- **Smooth Animations**: Enhanced user experience with subtle animations using Framer Motion.

## Technologies Used

- **ReactJS**: Component-based architecture for building the user interface.
- **Google Books API**: To fetch book data based on user search.
- **React Query**: For efficient data fetching and caching.
- **React Context API**: To manage global state.
- **React Router**: For seamless navigation.
- **Axios**: For making HTTP requests.
- **Material-UI**: For pre-built, responsive UI components.
- **React Hot Toaster**: For displaying notifications.
- **CSS Modules**: For modular and scoped styling.
- **Framer Motion**: To add animations and transitions.

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/DCR-Books.git
   cd DCR-Books
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Application**:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

1. **Search for Books**:
   - Use the search bar to find books via the Google Books API.
2. **Add to Read List**:
   - Click on a book to add it to your "Read" list.
3. **Mark as Favorite**:
   - Select books in your "Read" list to add them to your "Favorites".
4. **Persistent Data**:
   - All data is saved in local storage and is automatically loaded when you revisit the app.

## Folder Structure

```plaintext
src/
├── components/       # Reusable components
├── context/          
│── custom hooks/     # Custom hooks 
│── lib/              # Helper libraries and utilities
├── pages/            # Application pages
└── App.js            # Main application entry point
```

## Future Enhancements
- **Authentication**: Add user accounts for personalized libraries.
- **Cloud Storage**: Sync data across devices using a backend.
- **Enhanced Animations**: Incorporate more interactive animations. 

## Contributing
Contributions are welcome! Feel free to fork the repository and submit pull requests. If you have ideas for new features or improvements, don't hesitate to open an issue or contact the maintainer.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
- [Google Books API](https://developers.google.com/books)
- [Material-UI](https://mui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hot Toaster](https://react-hot-toast.com/)


