import React from "react";
import '../css/Main.css'

const baseUrl = 'http://localhost:8080';
const countUrl = '/api/word-ratings/high-rating/count/accounts/5'


function Main() {

    const [count, setCount] = React.useState();
    React.useEffect(() => {
        fetch(baseUrl + countUrl)
            .then(res => { return res.json()})
            .then((json) => setCount(json))
    }, [])
    return (
        <div className='main'>
            <h1>You have <span className="count">{count}</span> words with high rating!</h1>
        </div>
    )
}

export default Main