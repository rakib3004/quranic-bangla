import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


const Question1 = () => {
  const navigation = useNavigation();

  const words = 
     [
        { arabic: "الَّذِينَ هُمْ", bangla: "যারা", color: "#0282D7" },
        { arabic: "عَنْ", bangla: "সম্বন্ধে", color: "#D60093" },
        { arabic: "صَلَاتِهِمْ", bangla: "তাদের সালাত", color: "#990000" },
        { arabic: "سَاهُونَ", bangla: "উদাসীন", color: "#006600" },
     ];
  //   [
  //     { arabic: "خَلَقَ", bangla: "সৃষ্টি করেছেন", color: "#0282D7" },
  //     { arabic: "الْإِنْسَانَ", bangla: "মানুষকে", color: "#D60093" },
  //     { arabic: "مِنْ", bangla: "হতে", color: "#990000" },
  //     { arabic: "عَلَقٍ", bangla: "আলাক", color: "#006600" },
  //  ];

  const finalWords =  
  //[
//     { arabic: "خَلَقَ", bangla: "সৃষ্টি করেছেন", color: "#0282D7" },
//     { arabic: "الْإِنْسَانَ", bangla: "মানুষকে", color: "#D60093" },
//     { arabic: "مِنْ", bangla: "হতে", color: "#990000" },
//     { arabic: "عَلَقٍ", bangla: "আলাক", color: "#006600" },
//  ];
[
  { arabic: "الَّذِينَ هُمْ", bangla: "যারা", color: "#0282D7" },
  { arabic: "عَنْ", bangla: "সম্বন্ধে", color: "#D60093" },
  { arabic: "صَلَاتِهِمْ", bangla: "তাদের সালাত", color: "#990000" },
  { arabic: "سَاهُونَ", bangla: "উদাসীন", color: "#006600" },
];

  const [wordNo, setWordNo] = useState(0);
  const [selectedFirstWord, setSelectedFirstWord] = useState(finalWords[wordNo].arabic);
  const [selectedFirstWordBangla, setSelectedFirstWordBangla] = useState(finalWords[wordNo].bangla);
  const [answerScript, setAnswerScript] = useState("")

  const shuffleArray= (array)=> {
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
      setAnswerScript(answerScript+" "+selectedFirstWordBangla);

      setWordNo((wordNo+1)%finalWords.length);
     

      setSelectedFirstWord(finalWords[wordNo].arabic);
      setSelectedFirstWordBangla(finalWords[wordNo].bangla);
    }
  };
  return (
    <View>
      <Text className="text-xl my-5">শব্দ বাছাই ১</Text>
      <View className="flex flex-row">
      
      {finalWords.map((word) => (
          <WordToken
            word={word.arabic}
            selectedFirstWord={selectedFirstWord}
          />
            ))}
      </View>
      <View className="m-3 bg-gray-400 shadow-xl rounded-xl">
        <Text className="font-semibold">{answerScript}</Text>
      </View>
 
      <View className="flex flex-row">
      {shuffledWords.map((shuffledWord) => (
          <WordToken
            word={shuffledWord.bangla}
            handleWordSelection={handleWordSelectionBangla}
            selectedFirstWord={selectedFirstWord}
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
}) => {
  return (
    <TouchableOpacity
  key={word}
  className={`${
    selectedFirstWord === word 
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
