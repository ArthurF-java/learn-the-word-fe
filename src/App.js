import React from 'react';
import './css/App.css'
import {Routes, Route} from 'react-router-dom';
import {Main, Test} from './pages'
import {Header} from './components'

function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <div className="text">HELLO MOTHER FUCKER!!!!</div><br/><br/>
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/test" element={<Test />}/>
                </Routes>
            </div>
        </div>
    );

}
export default App;
