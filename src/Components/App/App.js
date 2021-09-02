import { useEffect, useState } from 'react';
import axios from 'axios';
import WordSection from '../WordSection/WordSection';
import InputField from '../InputField/InputField';
import './App.css';

function App() {
  const [sentenceNumber, setSentenceNumber] = useState(1);
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
  }, []);


  return (
    <div className="App">
      <WordSection sentence={sentence} />
      <InputField/>
    </div>
  );
}

export default App;
