import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Product />
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Product />
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Product />
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Product />
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Product />
                </div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <Product />
                </div>
            </div>
        );
    }
}

export default App;
