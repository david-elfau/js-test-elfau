import React, { Component } from 'react'
import data from './data/data.json'
import ListBussines from './Bussines'
import Gold from './Gold'


class App extends Component {

    state = {        
        businesses: data.businesses 
    };
    
    render() {
        const { businesses } = this.state;

        return (

            <div className="container">

                <ListBussines businessesData={businesses} />
                <Gold />
            </div>
        );
    }
}

export default App