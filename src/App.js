import React from 'react';
import './css/App.css'
import {Routes, Route} from 'react-router-dom';
import {Main, AddWord, WordList} from './pages/index'
import {Header} from './components/index'
import {Container} from "@mui/material";
import axios from "axios";

const baseUrl = "http://localhost:8080/api";
const translateTypesUrl = "/words/translate-types"
const wordUrl = "/words/names"
const createWordUrl = "/words"

function App() {

    const [translateTypes, setTranslateTypes] = React.useState();

    React.useEffect(() => {
        axios.get(baseUrl + translateTypesUrl).then(res => setTranslateTypes(res.data))
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <Container>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/add-word" element={<AddWord translateTypes={translateTypes}
                                                                  fullGetNamesUrl={baseUrl + wordUrl}
                                                                  fullCreateWordUrl={baseUrl + createWordUrl}/>}/>
                        <Route path="/word-lists" element={<WordList/>}/>
                    </Routes>
                </div>
            </Container>
        </div>
    );
}

export default App;
