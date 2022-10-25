import React from 'react';
import './App.css';
import axios from 'axios';
import Bookshelf from './Bookshelf';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
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
      </>
    )
  }
}

export default BestBooks;
