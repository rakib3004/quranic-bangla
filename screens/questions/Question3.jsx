import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';


const Question3 = () => {
  const navigation = useNavigation();

  const words = 
  [
    { arabic: "الْحَمْدُ", bangla: "সকল প্রশংসা", color: "bg-[#0282D7]" },
    { arabic: "لِلَّهِ", bangla: "আল্লাহরই", color: "bg-[#D60093]" },
    { arabic: "رَبِّ", bangla: "প্রতিপালক", color: "bg-[#990000]" },
    { arabic: "الْعَالَمِين", bangla: "জগতসমূহের", color: "bg-[#006600]" },
  ];

  const finalWords =  
  [
    { arabic: "الْحَمْدُ", bangla: "সকল প্রশংসা", color: "bg-[#0282D7]" },
    { arabic: "لِلَّهِ", bangla: "আল্লাহরই", color: "bg-[#D60093]" },
    { arabic: "رَبِّ", bangla: "প্রতিপালক", color: "bg-[#990000]" },
    { arabic: "الْعَالَمِين", bangla: "জগতসমূহের", color: "bg-[#006600]" },
  ];

  const [wordNo, setWordNo] = useState(0);
  const [selectedFirstWord, setSelectedFirstWord] = useState(finalWords[0].arabic);
  const [selectedFirstWordBangla, setSelectedFirstWordBangla] = useState(finalWords[0].bangla);
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

console.log(selectedFirstWord);
  const handleWordSelectionBangla = (banglaWord) => {
    const selected = banglaWord===selectedFirstWordBangla;
    if (selected) {
      setAnswerScript(answerScript+" "+selectedFirstWordBangla);

      setWordNo((wordNo+1)%words.length);
     
      setSelectedFirstWord(finalWords[wordNo+1].arabic);
      setSelectedFirstWordBangla(finalWords[wordNo+1].bangla);
    }
  };
  const handleWordSelectionArabic = (arabicWord) => {
  
  };
  return (
    <View>
      <Text className="text-xl my-5">শব্দ বাছাই ৩</Text>
      <View className="flex flex-row">
      
      {finalWords.map((word) => (
          <WordToken
          key={word.arabic}
            word={word.arabic}
            handleWordSelection={handleWordSelectionArabic}
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
            key={shuffledWord.bangla}
            word={shuffledWord.bangla}
            handleWordSelection={handleWordSelectionBangla}
            selectedFirstWord={selectedFirstWord}
          />
            ))}
     </View>
     <View className="flex flex-row justify-between">
        <View>
          <TouchableOpacity
            className="text-5xl"
            onPress={() => navigation.navigate("Choices")}
          >
            <Text className="text-xl text-orange-500"> হোম {"->"} </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            className="text-5xl"
            onPress={() => navigation.navigate("Question2")}
          >
            <Text className="text-xl text-orange-500">{"<-"} পূর্ববর্তী</Text>
          </TouchableOpacity>
        </View>
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
  <Text className={`${
    selectedFirstWord === word 
      ? "font-bold text-white"
      : "text-black"
  }`}>{word}</Text>
</TouchableOpacity>
  );
};




export default Question3;
