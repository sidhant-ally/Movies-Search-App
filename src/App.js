import React, { Component } from 'react';
import './App.css';
// Components
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import MoviesGrid from './components/MoviesGrid'

class App extends Component {
  state = { query: "war", movies: [], loading: true }

  onSearch = (query) => {
    console.log('Query:', query);
    this.setState({ query: query, movies: [], loading: true })
    this.fetchMovies(query)
  }

  componentDidMount() {
    this.fetchMovies(this.state.query)
  }

  fetchMovies = (query) => {
    fetch(`https://www.omdbapi.com/?apikey=45f0782a&s=${query}`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.Response === 'True')
          this.setState({ movies: json.Search, loading: false });
        else
          this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBar query={this.state.query} onSearch={this.onSearch} />

        <h3 className="App-intro">Sharing a few of our favourite movies</h3>
        {this.state.loading ? (
          <div>Loading...</div>
        ) : (
          <MoviesGrid movies={this.state.movies} />
        )}
      </div>
    );
  }
}
export default App;
