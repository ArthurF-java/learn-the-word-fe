import React from 'react';
import './css/App.css'
import {Routes, Route} from 'react-router-dom';
import {Main, AddWord, WordList} from './pages/index'
import {Header} from './components/index'

function App() {


    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main />}/>
                    <Route path="/add-word" element={<AddWord />}/>
                    <Route path="/word-lists" element={<WordList />}/>
                </Routes>
            </div>
        </div>
    );
}
export default App;
