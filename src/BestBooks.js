import React from 'react';
import './App.css';
import axios from 'axios';
import Bookshelf from './Bookshelf';
// import AddBook from './AddBook';
import Button from 'react-bootstrap/Button';
import BookFormModal from './BookFormModal';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showNewBookForm: false,
      errorMessage: '',
      showModal: false
    }
  }

  componentDidMount = async () => {
    const config = {
      method: 'get', // get is the default
      baseURL: 'http://localhost:3001',
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
        baseURL: 'http://localhost:3001',
        url: '/books',
        data: newBook
      }
      const response = await axios(config);
      this.setState({books: [...this.state.books, response.data]});
      this.setState({errorMessage: ''});
    }
    catch (error) {
      console.error('There\'s an error in BestBook.js newBook(): ', error)
      this.setState({errorMessage: `Status code ${error.response.status}: ${error.response.data}. `})
      console.error(this.errorMessage);    
    }
  }

  // showForm = () => this.setState({ showNewBookForm : true });

  handleOpenModal = (event) =>{
    this.setState({showModal: true});
  }

  handleCloseModal = (event) =>{
    this.setState({showModal: false});
  }

  render() {


    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length > 0 ? (
          <Bookshelf
            books={this.state.books}
          />
        ) : (
          <h3>No Books Found :(</h3>
        )}

        <Button onClick={this.showForm}>Add a book!</Button>

        {this.state.showNewBookForm && <BookFormModal handleCreateBook={this.handleCreateBook}/>}

      </>
    )
  }
}

export default BestBooks;
