import React, { Component } from 'react';
import SearchInput from './SearchInput/SearchInput';
import SearchTypes from './SearchTypes/SearchTypes';
import SearchButton from './SearchButton/SearchButton';

import './Search.scss';

export class Search extends Component {
  
    render() {
        return (
            <form>
                <SearchInput placeholder = 'Quentin Tarantino' />
                <div className='header-filters'>
                    <SearchTypes />
                    <SearchButton buttonText = 'search' buttonClass='filter1' />
                </div>
                
            </form>
        )
    }
}

export default Search;