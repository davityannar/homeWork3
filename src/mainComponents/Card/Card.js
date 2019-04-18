import React, {Component} from 'react';
import CardItem from '../../components/CardItem/CardItem';
import './Card.scss';



export class Card extends Component {
    state = {
        data: []
    };
   

    componentDidMount(){
        fetch('https://reactjs-cdp.herokuapp.com/movies?searchBy=title&limit=9')
        .then(res => res.json())
        .then(response =>
            this.setState({
                data: response.data
            })
        ).catch(error => console.log('error'))
    }

    render() {
        const movies = this.state.data;
        return (
            <div className='card-wrapper'>
                {movies.map((movie, index) => <CardItem key={index} {...movie}/>)}                  
            </div>
        )
    }
}

export default Card;