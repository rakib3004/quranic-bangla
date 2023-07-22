import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Word1 = () => {
  const words = 
     [
        { arabic: "الَّذِينَ هُمْ", bangla: "যারা", color: "bg-[#0282D7]" },
        { arabic: "عَنْ", bangla: "সম্বন্ধে", color: "bg-[#D60093]" },
        { arabic: "صَلَاتِهِمْ", bangla: "তাদের সালাত", color: "bg-[#990000]" },
        { arabic: "سَاهُونَ", bangla: "উদাসীন", color: "bg-[#006600]" },
     ];

  const [selectedFirstWord, setSelectedFirstWord] = useState("");
  const [selectedSecondWord, setSelectedSecondWord] = useState("");

  const handleWordSelectionArabic = (arabicWord) => {
    const selected = words.find((word) => word.arabic === arabicWord);
    if (selected) {
      setSelectedFirstWord(selected.bangla);
      setSelectedSecondWord(selected.arabic);
    }
  };

  const handleWordSelectionBangla = (banglaWord) => {
    const selected = words.find((word) => word.bangla === banglaWord);
    if (selected) {
      setSelectedFirstWord(selected.arabic);
      setSelectedSecondWord(selected.bangla);
    }
  };
  return (
    <View>
      <Text className="text-xl my-5">শব্দ ১: (هُمْ) কোরআনে এসেছে মোট ৩৭৩৮ বার </Text>
      <View className="flex flex-row">
          <WordToken
            word={words[0].arabic}
            color={words[0].color}
            handleWordSelection={handleWordSelectionArabic}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
          <WordToken
            word={words[1].arabic}
            color={words[1].color}
            handleWordSelection={handleWordSelectionArabic}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
          <WordToken
            word={words[2].arabic}
            color={words[2].color}
            handleWordSelection={handleWordSelectionArabic}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
          <WordToken
            word={words[3].arabic}
            color={words[3].color}
            handleWordSelection={handleWordSelectionArabic}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
      </View>
 
      <View className="flex flex-row">
      <WordToken
            word={words[0].bangla}
            color={words[0].color}
            handleWordSelection={handleWordSelectionBangla}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
          <WordToken
            word={words[2].bangla}
            color={words[2].color}
            handleWordSelection={handleWordSelectionBangla}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
          <WordToken
            word={words[1].bangla}
            color={words[1].color}
            handleWordSelection={handleWordSelectionBangla}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
          <WordToken
            word={words[3].bangla}
            color={words[3].color}
            handleWordSelection={handleWordSelectionBangla}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
     </View>

     
      
  </View>
  );
};

const WordToken = ({
  word,
  color,
  handleWordSelection,
  selectedFirstWord,
  selectedSecondWord,
}) => {
  return (
    <TouchableOpacity
  key={word}
  className={`${color} p-4 mb-4 mr-3 rounded-lg`}
  onPress={() => handleWordSelection(word)}
>
  <Text  className={`${
    selectedFirstWord === word || selectedSecondWord === word
      ? "text-white font-bold"
      : "text-black"
  }`}>{word}</Text>
</TouchableOpacity>
  );
};




export default Word1;
