import React from "react";
import PropTypes from 'prop-types';
import {Autocomplete, Container, TextField} from "@mui/material";
import axios from "axios";
import '../css/AddWord.css';

function AddWord({translateTypes, fullGetNamesUrl, fullCreateWordUrl}) {

    const [translateType, setTranslateType] = React.useState();
    const [wordName, setWordName] = React.useState();
    const [wordNames, setWordNames] = React.useState();
    const [wordTranslate, setWordTranslate] = React.useState();
    const [wordTranscription, setWordTranscription] = React.useState();


    React.useEffect(() => {
        axios.get(fullGetNamesUrl).then(res => setWordNames(res.data))
    }, [fullGetNamesUrl])

    var person = {
        firstName: "James",
        lastName: "Bond",
        age: 25,
        address: {
            id: 1,
            country:"UK"
        }
    };

    const createWord = () => {
        if ((wordNames.findIndex(item => wordName.toLowerCase() === item.toLowerCase())) > -1) {
            alert("This word exist")
        }
        const word = {
            word: wordName,
            transcription: wordTranscription,
            translate: wordTranslate,
            translateType: translateType
        }
        axios.post(fullCreateWordUrl, word).then(r => r.status)
        // console.log("type", type)
        // console.log("wordName", wordName)
        // console.log("wordTranslate", wordTranslate)
        // console.log("wordTranscription", wordTranscription)
    }

    return (
        <div className="wrapper-add-words">
            <h1 className="topic_add_words">Add word menu</h1>
            <Container sx={{width: 320}} fixed>
                <Autocomplete
                    options={translateTypes}
                    sx={{width: 300}}
                    onChange={(event, value) => setTranslateType(value)}
                    renderInput={(params) => <TextField {...params} label="Type"/>}
                /><br/>
                <TextField
                    sx={{width: 300}}
                    label="Word"
                    onChange={e => {
                        setWordName(e.target.value)
                    }}
                    value={wordName}
                /><br/><br/>
                <TextField
                    sx={{width: 300}}
                    label="Translate"
                    onChange={e => {
                        setWordTranslate(e.target.value)
                    }}
                    value={wordTranslate}
                /><br/><br/>
                <TextField
                    sx={{width: 300}}
                    label="Transcription"
                    onChange={e => {
                        setWordTranscription(e.target.value)
                    }}
                    value={wordTranscription}
                />
                <br/>
                <button onClick={createWord}>show</button>
            </Container>
        </div>
    )
}

AddWord.prototype = {
    wordNames: PropTypes.array
}

export default AddWord