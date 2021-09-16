import { useState, useEffect } from 'react';
import './InputField.css';

function InputField({sentenceArray}) {
    // an array of input values from the the input field
    const [usersGuess, setUsersGuess] = useState([]);
    // creates an index that correlates to the sencentceArray indexes and can be used as a key
    let index = -1;

    useEffect(() => {
        async function setArray() {
            // creates an array of nulls that are the same length as the sentenceArray to make it easier to switch the input values according to the index
            const arrOfNulls = await sentenceArray.map(() => null);
            setUsersGuess(arrOfNulls);
        }
        setArray();
    }, [sentenceArray]);
    
    const updateUsersGuess = (index, value) => {
        let updatedGuess = usersGuess;
        updatedGuess[index] = value;
        setUsersGuess(updatedGuess);
    }

    return (
        <div>
            {sentenceArray.map(letter => {
                // increases the index by one starting from zero to connect the key to the actual letter in the sentenceArray  
                index += 1
                const i = index;
                
                // allows the usersGuess to be correlated to the sentenceArray (makes it easy to access on change & check if the users have answered)
                return letter === ' ' ? <p key={i}>space</p> : <input key={i} onChange={e => updateUsersGuess(i, e.target.value)}/>
            })}
        </div>
    );
}

export default InputField;