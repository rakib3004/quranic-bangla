import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SurahMasad = () => {
  const [words, setWords] = useState([
    { english: 'الَّذِينَ هُمْ', bangla: 'যারা' },
    { english: 'صَلَاتِهِمْ', bangla: 'তাদের সালাত' },
    { english: 'عَنْ', bangla: 'সম্বন্ধে' },
    { english: 'سَاهُونَ', bangla: 'উদাসীন' },

  ]);

  const [selectedFirstWord, setSelectedFirstWord] = useState('');
  const [selectedSecondWord, setSelectedSecondWord] = useState('');


  const handleWordSelectionEnglish = (englishWord) => {
    const selected = words.find((word) => word.english === englishWord);
    if (selected) {
      setSelectedFirstWord(selected.bangla);
      setSelectedSecondWord(selected.english);
    }
  };

  const handleWordSelectionBangla = (banglaWord) => {
    const selected = words.find((word) => word.bangla === banglaWord);
    if (selected) {
      setSelectedFirstWord(selected.english);
      setSelectedSecondWord(selected.bangla);
    }
  };
  return (
    <View>
      <Text style={{ fontSize: 24, margin: 20 }}>Word Selector</Text>
      <View>
        {words.map((word) => (
       <EnglishWordToken word={word} handleWordSelectionEnglish={handleWordSelectionEnglish} selectedFirstWord={selectedFirstWord} selectedSecondWord={selectedSecondWord}/>
        ))}
      </View>
      <View>
        {words.map((word) => (
          <TouchableOpacity
            key={word.bangla}
            style={{
              backgroundColor: selectedFirstWord === word.bangla  || selectedSecondWord ===word.bangla ? '#033D6C' : '#53AF32',
              padding: 10,
              marginBottom: 10,
            }}
            onPre
            onPress={() => handleWordSelectionBangla(word.bangla)}
          >
            <Text>{word.bangla}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
  
    </View>
  );
  

};

const EnglishWordToken = ({ word, handleWordSelectionEnglish, selectedFirstWord, selectedSecondWord }) => {

  return(
    <TouchableOpacity
    key={word}
    style={{
      backgroundColor: selectedFirstWord === word || selectedSecondWord ===word ? '#033D6C' : '#53AF32',
      padding: 10,
      marginBottom: 10,
    }}
    onPress={() => handleWordSelectionEnglish(word)}
  >
    <Text>{word}</Text>
  </TouchableOpacity>
  
  );
  
  };





export default SurahMasad;
