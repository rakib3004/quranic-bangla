import { useState } from "react";
import HoverCard from "./HoverCard";
import PropTypes from 'prop-types';

// word, meaning, word-type, list of similar word of word-type, hover-all
const Lines =({ayah, number})=> {
 
  const [hoveredWord, setHoveredWord] = useState(null);

  const handleWordHover = (wordData) => {
    if (wordData && wordData.card) {
      setHoveredWord(wordData);
    } else {
      setHoveredWord(null);
    }
  };



  
  return (
    <div className="relative flex flex-row mt-16 ml-24">
    <h1 className="font-bold text-2xl text-teal-700">{number}</h1>
  
 {ayah.slice().reverse().map((item, index) => (
        <div key={index}>
          <p  
           className={item.card ? 'font-bold text-2xl text-red-700' : 'text-2xl text-sky-900'}

            onMouseOver={() => handleWordHover(item)}
            onMouseOut={() => handleWordHover(null)}
          >
            {item.word}
          </p>
          {/* <span className="tooltip">
              {item.word}
              {hoveredWord === item && (
                <span className="tooltiptext">{item.definition}</span>
              )}
            </span> */}
        </div>
      ))}   
         {hoveredWord && <HoverCard word={hoveredWord.word} definition={hoveredWord.definition} />}    
    </div>
  )
}

Lines.propTypes = {
  ayah: PropTypes.object.isRequired,
  number: PropTypes.string.isRequired,
};

export default Lines
