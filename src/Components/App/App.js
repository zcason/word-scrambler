import { useEffect, useState } from 'react';
import axios from 'axios';
import WordSection from '../WordSection/WordSection';
import InputField from '../InputField/InputField';
import './App.css';

function App() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const [sentenceNumber, setSentenceNumber] = useState(randomNumber);
  const [sentence, setSentence] = useState('');

  useEffect(() => {
    async function initFetch() {
      try{  
        const res = await axios.get(`https://api.hatchways.io/assessment/sentences/${sentenceNumber}`)
        const sentence = res.data.data.sentence;

        setSentence(sentence);
      } catch(err){
        console.error(err);
      }  
    };
    initFetch();
  }, [sentenceNumber]);


  return (
    <div className="App">
      <WordSection sentence={sentence} />
      <InputField sentenceArray={sentence.split('')}/>
    </div>
  );
}

export default App;
