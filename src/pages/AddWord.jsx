import React from "react";

function AddWord() {

    const [emailValue, setEmail] = React.useState('');

    return (
        <div>
            <input value={emailValue}
                   onChange={e => setEmail(e)}
                   type="text"
                   name="value"
                   placeholder="value"/>
            <input type="text"
                   name="translate"
                   placeholder="translate"/>
            <button type="button">Login</button>
        </div>
    )
}


export default AddWord