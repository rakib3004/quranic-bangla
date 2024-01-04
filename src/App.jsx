import { useState } from "react";
import HoverCard from "./HoverCard";


const App =()=> {
  const prepositions = ['1.1 Prepositions-I','Bi – with','Li – for','‘Ala – on','Min – from','Ila – to','Fi - in'];
  const ayah = [{word:"بِ", definition: prepositions , card: true},{word: "سْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ", definition:[], card: false, ayahNumber: 1},{word: "ٱلْ", definition:prepositions, card: true},{word: "حَمْدُ", definition:[], card: false},{word: "لِ", definition:prepositions, card: true},{word: "لِلَّهِ رَبِّ ٱلْ", definition:[], card: false},{word: "عَـٰلَمِينَ", definition:['1.2 Plural','(introduce','common','singular-plural pairs','from the Qur’an)'], card: true, ayahNumber: 2}]
  console.log(ayah);
 
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

export default App
