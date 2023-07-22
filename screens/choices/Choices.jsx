import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const words = 
[
  { arabic: "خَلَقَ", bangla: "সৃষ্টি করেছেন", color: "#0282D7" },
  { arabic: "الْإِنْسَانَ", bangla: "মানুষকে", color: "#D60093" },
  { arabic: "مِنْ", bangla: "হতে", color: "#990000" },
  { arabic: "عَلَقٍ", bangla: "আলাক", color: "#006600" },
  { arabic: "الَّذِينَ هُمْ", bangla: "যারা", color: "#0282D7" },
  { arabic: "عَنْ", bangla: "সম্বন্ধে", color: "#D60093" },
  { arabic: "صَلَاتِهِمْ", bangla: "তাদের সালাত", color: "#990000" },
  { arabic: "سَاهُونَ", bangla: "উদাসীন", color: "#006600" },
  { arabic: "الْحَمْدُ", bangla: "সকল প্রশংসা", color: "bg-[#0282D7]" },
  { arabic: "لِلَّهِ", bangla: "আল্লাহরই", color: "bg-[#D60093]" },
  { arabic: "رَبِّ", bangla: "প্রতিপালক", color: "bg-[#990000]" },
  { arabic: "الْعَالَمِين", bangla: "জগতসমূহের", color: "bg-[#006600]" },
];

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

    if (currentQuestionIndex === questions.length - 1) {
     
      setCurrentQuestionIndex(0);
      setTotalCorrect(0);
      setTotalWrong(0);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
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
    </View>
  );
};

export default Choices;
