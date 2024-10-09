import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainPage from "./Pages/mainpage/MainPage"
import Homepage from "./Pages/mainpage/homepage/HomePage"
import Overview from "./Pages/mainpage/overview/Overview"
import About from "./Pages/mainpage/about/About"
import Contribute from "./Pages/mainpage/contribute/Contribute"
import BookDetails from "./Pages/bookdetails/BookDetails"
import Books from "./Pages/books/Books"
import { BooksProvider } from "./context/BooksContext"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from 'react-query/devtools'
import Profile from "./Pages/userprofile/Profile"
import ErrorMsg from "./ErrorMsg"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
    errorElement: <ErrorMsg />
  }
})


const router = createBrowserRouter([
  {
    element: <MainPage />,
    children: [{
      path: "/",
      element: <Homepage />,
      errorElement: <ErrorMsg />
    },
    {
      path: "/overview",
      element: <Overview />,
      errorElement: <ErrorMsg />
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorMsg />
    },
    {
      path: "/contribute",
      element: <Contribute />,
      errorElement: <ErrorMsg />
    }]
  },
  {
    element: <Books />,
    path: "/books",
    errorElement: <ErrorMsg />
  },
  {
    element: <BookDetails />,
    path: "/books/:id",
    errorElement: <ErrorMsg />
  },
  {
    element: <Profile />,
    path: "/user",
    errorElement: <ErrorMsg />
  },
  {
    path: "*",
    element: <ErrorMsg message="404 Not Found - The page you're looking for doesn't exist." />,
  },

])

function App() {






  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BooksProvider>
        <RouterProvider router={router} />
      </BooksProvider>
    </QueryClientProvider>
  )
}

export default App