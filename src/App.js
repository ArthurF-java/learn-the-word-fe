import React from 'react';
import './css/App.css'
import {Routes, Route} from 'react-router-dom';
import {Main, Test} from './pages/index'
import {Header} from './components/index'

function App() {

    const [count, setCount] = React.useState();
    React.useEffect(() => {
        fetch('http://localhost:8080/api/word-ratings/high-rating/count/accounts/1')
            .then(res => { return res.json()})
            .then((json) => setCount(json))
        console.log('fetchg')
    }, [])
    console.log("main")

    return (
        <div className="wrapper">
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main count={count}/>}/>
                    <Route path="/test" element={<Test />}/>
                </Routes>
            </div>
        </div>
    );

}
export default App;
