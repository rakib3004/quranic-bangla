import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Question1 = () => {
  const words = 
     [
        { arabic: "الَّذِينَ هُمْ", bangla: "যারা", color: "#0282D7" },
        { arabic: "عَنْ", bangla: "সম্বন্ধে", color: "#D60093" },
        { arabic: "صَلَاتِهِمْ", bangla: "তাদের সালাত", color: "#990000" },
        { arabic: "سَاهُونَ", bangla: "উদাসীন", color: "#006600" },
     ];

  const [wordNo, setWordNo] = useState(0);
  const [selectedFirstWord, setSelectedFirstWord] = useState(words[wordNo].arabic);
  const [selectedFirstWordBangla, setSelectedFirstWordBangla] = useState(words[wordNo].bangla);

  const [selectedSecondWord, setSelectedSecondWord] = useState("");

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const tempWords = words;
  const shuffledWords = shuffleArray(tempWords);


  const handleWordSelectionBangla = (banglaWord) => {
    const selected = banglaWord===selectedFirstWordBangla;
    if (selected) {
      setWordNo(wordNo+1);
      setSelectedFirstWord(words[wordNo].arabic);
      setSelectedFirstWordBangla(words[wordNo].bangla);
    }
  };
  return (
    <View>
      <Text className="text-xl my-5">শব্দ বাছাই ১</Text>
      <View className="flex flex-row">
      {words.map((word) => (
          <WordToken
            word={word.arabic}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
            ))}
      </View>
 
      <View className="flex flex-row">
      {shuffledWords.map((shuffledWord) => (
          <WordToken
            word={shuffledWord.bangla}
            handleWordSelection={handleWordSelectionBangla}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
            ))}
     </View>
    
      
  </View>
  );
};

const WordToken = ({
  word,
  handleWordSelection,
  selectedFirstWord,
  selectedSecondWord,
}) => {
  return (
    <TouchableOpacity
  key={word}
  className={`${
    selectedFirstWord === word || selectedSecondWord === word
      ? "bg-[#033D6C]"
      : "bg-[#53AF32]"
  } p-4 mb-4 mr-3 rounded-lg`}
  onPress={() => handleWordSelection(word)}
>
  <Text>{word}</Text>
</TouchableOpacity>
  );
};




export default Question1;
