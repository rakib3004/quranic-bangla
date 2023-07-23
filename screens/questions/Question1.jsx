import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";


const Question1 = () => {
  const navigation = useNavigation();

  const words = 
  
    [
      { arabic: "خَلَقَ", bangla: "সৃষ্টি করেছেন", color: "#0282D7" },
      { arabic: "الْإِنْسَانَ", bangla: "মানুষকে", color: "#D60093" },
      { arabic: "مِنْ", bangla: "হতে", color: "#990000" },
      { arabic: "عَلَقٍ", bangla: "আলাক", color: "#006600" },
   ];

  const finalWords =  
  [
    { arabic: "خَلَقَ", bangla: "সৃষ্টি করেছেন", color: "#0282D7" },
    { arabic: "الْإِنْسَانَ", bangla: "মানুষকে", color: "#D60093" },
    { arabic: "مِنْ", bangla: "হতে", color: "#990000" },
    { arabic: "عَلَقٍ", bangla: "আলাক", color: "#006600" },
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
      <Text className="text-xl my-5">শব্দ বাছাই ১</Text>
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
            onPress={() => navigation.navigate("Question2")}
          >
            <Text className="text-xl text-orange-500"> পরবর্তী {"->"} </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            className="text-5xl"
            onPress={() => navigation.navigate("Display")}
          >
            <Text className="text-xl text-orange-500">{"<-"} মেন্যু</Text>
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




export default Question1;
