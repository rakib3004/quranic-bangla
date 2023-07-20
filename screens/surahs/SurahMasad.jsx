import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const SurahMasad = () => {
  const words = [
    { arabic: "الَّذِينَ هُمْ", bangla: "যারা" },
    { arabic: "عَنْ", bangla: "সম্বন্ধে" },
    { arabic: "صَلَاتِهِمْ", bangla: "তাদের সালাত" },
    { arabic: "سَاهُونَ", bangla: "উদাসীন" },
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
      <Text className="text-xl my-5">Word Selector</Text>
      <View className="flex flex-row">
          <WordToken
            word={words[0].arabic}
            handleWordSelection={handleWordSelectionArabic}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
          <WordToken
            word={words[1].arabic}
            handleWordSelection={handleWordSelectionArabic}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
          <WordToken
            word={words[2].arabic}
            handleWordSelection={handleWordSelectionArabic}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
          <WordToken
            word={words[3].arabic}
            handleWordSelection={handleWordSelectionArabic}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
      </View>
 
      <View className="flex flex-row">
      <WordToken
            word={words[0].bangla}
            handleWordSelection={handleWordSelectionBangla}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
          <WordToken
            word={words[2].bangla}
            handleWordSelection={handleWordSelectionBangla}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
          <WordToken
            word={words[1].bangla}
            handleWordSelection={handleWordSelectionBangla}
            selectedFirstWord={selectedFirstWord}
            selectedSecondWord={selectedSecondWord}
          />
          <WordToken
            word={words[3].bangla}
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




export default SurahMasad;
