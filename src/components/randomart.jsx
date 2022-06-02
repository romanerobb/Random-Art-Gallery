import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class RandomArt extends Component {
    state = {
        imageUrl: 'https://picsum.photos/800'
    };

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }

    render() { 
        return (
        <>
            <h1 className='p-3 mb-2 bg-dark text-warning'>Random Art Gallery</h1>
            <h5>by Romane Orlando Robb</h5>
            <p className='btn btn-warning btn-lg'>Hit refresh (or F5) to explore more art</p><br></br>
            <img src={this.state.imageUrl} alt="Random visuals."/>
        </>
        );
    };

}
 
export default RandomArt;