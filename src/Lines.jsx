import { useState } from "react";
import HoverCard from "./HoverCard";
import PropTypes from 'prop-types';

// word, meaning, word-type, list of similar word of word-type, hover-all
const Lines =({ayah})=> {
 
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
    
  
 {ayah.slice().reverse().map((item, index) => (
        <div key={index}>
          <p  
           className={item.card ? 'font-bold text-2xl text-red-700' : 'text-2xl text-sky-900'}

            // className={item.card ? 'w-28 hover:underline cursor-pointer' : ''}
            onMouseOver={() => handleWordHover(item)}
            onMouseOut={() => handleWordHover(null)}
          >
            {item.word}
          </p>
          {/* <ul>
            {item.definition.map((definitionItem, definitionIndex) => (
              <li key={definitionIndex}>{definitionItem}</li>
            ))}
          </ul> */}
        </div>
      ))}   
         {hoveredWord && <HoverCard word={hoveredWord.word} definition={hoveredWord.definition} />}

    
    </div>
  )
}

Lines.propTypes = {
  ayah: PropTypes.object.isRequired,
};

export default Lines
