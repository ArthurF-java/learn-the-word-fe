import React from "react";
import '../css/Main.css'


function Main(props) {
    //
    // const [count, setCount] = React.useState();
    // React.useEffect(() => {
    //     fetch('http://localhost:8080/api/word-ratings/high-rating/count/accounts/1')
    //         .then(res => { return res.json()})
    //         .then((json) => setCount(json))
    // }, [])
    return (
        <div className='main'>
            <h1>You have words {props.count} with high rating!</h1>
        </div>
    )
}

export default Main