import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


const questions = [
  {
    question: 'What is the meaning of "خَلَقَ" in Bangla?',
    options: ['সৃষ্টি করেছেন', 'মানুষকে', 'হতে', 'আলাক'],
    correctAnswer: 'সৃষ্টি করেছেন',
  },
  {
    question: 'What is the meaning of "الْإِنْسَانَ" in Bangla?',
    options: ['সৃষ্টি করেছেন', 'মানুষকে', 'হতে', 'আলাক'],
    correctAnswer: 'মানুষকে',
  },
  {
    question: 'What is the meaning of "عَنْ" in Bangla?',
    options: ['সৃষ্টি করেছেন', 'মানুষকে', 'হতে', 'সম্বন্ধে'],
    correctAnswer: 'সম্বন্ধে',
  },
];

const Choices = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);

  const handleAnswerSelection = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      setTotalCorrect(totalCorrect + 1);
    } else {
      setTotalWrong(totalWrong + 1);
    }
  
      setCurrentQuestionIndex(currentQuestionIndex + 1);

  };

  return (
    <View className="flex-1 p-4">
      <View className="mt-4 mb-8">
        <Text className="text-lg font-bold text-center">
          Total Correct: {totalCorrect}, Total Wrong: {totalWrong}
        </Text>
      </View>
      {currentQuestionIndex < questions.length ? (
        <View>
          <Text className="text-lg font-bold mb-4">
            {questions[currentQuestionIndex].question}
          </Text>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswerSelection(option)}
              className="bg-blue-500 rounded-md p-4 my-2'"
            >
              <Text className="text-white font-bold text-center">
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Text className="text-lg font-bold text-center">
          All questions answered. Quiz completed!
        </Text>
      )}

      <View className="flex flex-row justify-between">
        <View>
          <TouchableOpacity
            className="text-5xl"
            onPress={() => navigation.navigate("Home")}
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

export default Choices;
