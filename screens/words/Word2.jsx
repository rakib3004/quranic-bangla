import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Word2 = () => {
  const words = 
     [
        { arabic: "خَلَقَ", bangla: "সৃষ্টি করেছেন", color: "#0282D7" },
        { arabic: "الْإِنْسَانَ", bangla: "মানুষকে", color: "#D60093" },
        { arabic: "مِنْ", bangla: "হতে", color: "#990000" },
        { arabic: "عَلَقٍ", bangla: "আলাক", color: "#006600" },
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
      <Text className="text-xl my-5">শব্দ ২: (مِنْ) কোরআনে এসেছে মোট ৩২২১ বার </Text>
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

{/*     
<View className="flex flex-row justify-between">
<View>
     <TouchableOpacity className="text-5xl" onPress={() => navigation.navigate("Word3")}>
      <Text className="text-xl text-orange-500"> পরবর্তী {'->'} </Text>
      </TouchableOpacity>
     </View>
     <View>
     <TouchableOpacity className="text-5xl" onPress={() => navigation.navigate("Word1")}>
      <Text className="text-xl text-orange-500">{'<-'} পূর্ববর্তী  </Text>
      </TouchableOpacity>
     </View>
</View> */}
     
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




export default Word2;
