import React, { Component } from 'react';
import './index.css'

class SearchBar extends Component {
    state = { query: this.props.query }

    handleOnChange = (event) => this.setState({ query: event.target.value })

    render() {
        return (
            <div className="SearchBar">
                <input value={this.state.query} onChange={this.handleOnChange}></input>
                <button onClick={() => this.props.onSearch(this.state.query)}>Search</button>
            </div>
        );
    }
}
export default SearchBar;