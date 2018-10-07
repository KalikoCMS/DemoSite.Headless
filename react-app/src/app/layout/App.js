import React, { Component } from 'react';
import './App.css';
import HomePage from '../../features/home/HomePage';

class App extends Component {
    render() {
        return (
            <main className="main">
                <HomePage />
            </main>
        );
    }
}

export default App;
