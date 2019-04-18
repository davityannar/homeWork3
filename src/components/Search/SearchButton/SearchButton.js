import React from 'react';
import './SearchButton.scss';

export default class SearchButton extends React.PureComponent {
    handleSearch = (e) => {
        e.preventDefault();
    }
    render(){    
        return (
            <div>
                <button 
                    onClick={this.handleSearch}
                    className={this.props.buttonClass}
                >
                    {this.props.buttonText}
                </button>
            </div>
        )
    } 
}


