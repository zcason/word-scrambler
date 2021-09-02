import randomizeSentence from './WordSectionServices';
import './WordSection.css';

function WordSection({sentence}) {
    const randomSentence = randomizeSentence(sentence);
    return (
        <div>
            <h3 className='random-word'>{randomSentence}</h3>
            <p>Guess the sentence! Start typing!</p>
            <p>The yellow blocks are meant for spaces</p>
            <span className='score'>Score: 0</span>
        </div>
    );
}

export default WordSection;