import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const SurahMasad = () => {
  const [words, setWords] = useState([
    { english: 'Hello', bangla: 'হ্যালো' },
    { english: 'Goodbye', bangla: 'বিদায়' },
    { english: 'Thank you', bangla: 'ধন্যবাদ' },
    // Add more words here
  ]);

  const [selectedWord, setSelectedWord] = useState('');

  const handleWordSelection = (englishWord) => {
    const selected = words.find((word) => word.english === englishWord);
    if (selected) {
      setSelectedWord(selected.bangla);
    }
  };

  const handleWordSelection2 = (banglaWord) => {
    const selected = words.find((word) => word.bangla === banglaWord);
    if (selected) {
      setSelectedWord(selected.bangla);
    }
  };
  return (
    <View>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Word Selector</Text>
      <View>
        {words.map((word) => (
          <TouchableOpacity
            key={word.english}
            style={{
              backgroundColor: selectedWord === word.english ? 'red' : 'blue',
              padding: 10,
              marginBottom: 10,
            }}
            onPress={() => handleWordSelection(word.english)}
          >
            <Text>{word.english}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {words.map((word) => (
          <TouchableOpacity
            key={word.bangla}
            style={{
              backgroundColor: selectedWord === word.bangla ? 'green' : 'yellow',
              padding: 10,
              marginBottom: 10,
            }}
            onPre
            onPress={() => handleWordSelection2(word.bangla)}
          >
            <Text>{word.bangla}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
  
    </View>
  );
};

export default SurahMasad;
