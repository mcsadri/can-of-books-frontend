import React from 'react';
import './App.css';
import axios from 'axios';
import Bookshelf from './Bookshelf';
// import AddBook from './AddBook';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';
import UpdateFormModal from './UpdateFormModal';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      errorMessage: '',
      showModal: false,
      newBook: {},
      selectedBook: {},
      showUpdate: false
    }
  }

  componentDidMount = async () => {
    const config = {
      method: 'get', // get is the default
      baseURL: process.env.REACT_APP_SERVER,
      url: '/books' // endpoint
    }
    const response = await axios(config);
    console.log('data: ', response.data);
    this.setState({ books: response.data });
  }

  handleCreateBook = async (newBook) => {
    try {
      const config = {
        method: 'post',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/books',
        data: newBook
      }
      const response = await axios(config);
      this.setState({ books: [...this.state.books, response.data] });
      this.setState({ errorMessage: '' });
      console.log('Flag in handleCreateBook try.');
      this.setState({ showModal: false });
    }
    catch (error) {
      console.error('There\'s an error in BestBook.js newBook(): ', error)
      this.setState({ errorMessage: `Status code ${error.response.status}: ${error.response.data}. ` })
      console.error(this.errorMessage);
      console.log('Flag in handleCreateBook catch.')

    }
  }

  handleDeleteBook = async (bookToBeDeleted) => {
    try {
      const proceed = window.confirm(`Are you sure you want to delete ${bookToBeDeleted.title}?`);

      if (proceed) {
        const config = {
          method: 'delete',
          baseURL: process.env.REACT_APP_SERVER,
          url: `/books/${bookToBeDeleted._id}`,
        }
        const response = await axios(config);
        console.log(response.data);
        const newBooksArr = this.state.books.filter(book => book._id !== bookToBeDeleted._id);
        this.setState({ books: newBooksArr });
      }
    } catch (error) {
      console.error('There\'s an error in BestBook.js handleDeleteBook(): ', error)
      this.setState({ errorMessage: `Status code ${error.response.status}: ${error.response.data}. ` })
      console.error(this.errorMessage);
      console.log('Flag in handleDeleteBook catch.');
    }
  }

  handleUpdateBook = async (bookToBeUpdated) => {
    try {
      const config = {
        method: 'put',
        baseURL: process.env.REACT_APP_SERVER,
        url: `/books/${bookToBeUpdated._id}`,
        data: bookToBeUpdated
      }
      const response = await axios(config);
      console.log(response.data);
      const updateBooks = this.state.books.map(preExistingBook => {
        if (preExistingBook._id === bookToBeUpdated._id) {
          return bookToBeUpdated;
        } else {
          return preExistingBook;
        }
      });
      this.setState({ books: updateBooks });
    }
    catch (error) {
      console.error('There\'s an error in BestBook.js handleUpdateBook(): ', error)
      this.setState({ errorMessage: `Status code ${error.response.status}: ${error.response.data}. ` })
      console.error(this.errorMessage);
      console.log('Flag in handleUpdateBook catch.');
    }
  }


  // showForm = () => this.setState({ showNewBookForm : true });

  handleOpenModal = (event) => {
    this.setState({ showModal: true });
  }

  handleCloseModal = (event) => {
    this.setState({ showModal: false });
  }

  handleSelectBook = (bookToBeSelected) => {
    this.setState({ selectedBook: bookToBeSelected, showUpdate: true });
    console.log('You found handleSelectBook!');
  };

  handleOnHide = () => this.setState({ selectedBook: {}, showUpdate: false });

  render() {


    return (
      <>
        <h2>Books I Will Never Read</h2>

        {this.state.books.length > 0 ? (
          <Bookshelf
            books={this.state.books}
            handleDeleteBook={this.handleDeleteBook}
            handleSelectBook={this.handleSelectBook}
          />
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <Button onClick={this.handleOpenModal}>Add a book!</Button>

        {this.state.showModal &&
          <BookFormModal
            handleOnHide={this.handleOnHide}
            showUpdate={this.state.showUpdate}
            selectedBook={this.state.selectedBook}
            handleCreateBook={this.handleCreateBook}
            handleCloseModal={this.handleCloseModal}
            showModal={this.state.showModal}
            handleUpdateBook={this.handleUpdateBook}
          />}
          {this.state.showUpdate &&
          <UpdateFormModal
            handleOnHide={this.handleOnHide}
            showUpdate={this.state.showUpdate}
            selectedBook={this.state.selectedBook}
            handleUpdateBook={this.handleUpdateBook}
          />}

      </>
    )
  }
}

export default BestBooks;
