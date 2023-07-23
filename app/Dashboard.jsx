
import React from 'react';
import { View, Text } from 'react-native';

const Dashboard = () => {
  const userScores = {
    multipleChoice: {
      correct: 10,
      wrong: 2,
      totalQuestions: 12,
    },
    fillInBlank: {
      correct: 8,
      wrong: 4,
      totalQuestions: 12,
    },
    trueFalse: {
      correct: 15,
      wrong: 5,
      totalQuestions: 20,
    },
    matchingTable: {
      correct: 6,
      wrong: 3,
      totalQuestions: 9,
    },
  };

  const calculatePercentage = (correct, total) => ((correct / total) * 100).toFixed(2);

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl font-bold mb-4">Dashboard</Text>

      <View className="p-4 border borde-blue-500 rounded-lg mb-4">
        <Text className="text-lg font-bold mb-2">Multiple Choice Quiz</Text>
        <Text>Correct: {userScores.multipleChoice.correct}</Text>
        <Text>Wrong: {userScores.multipleChoice.wrong}</Text>
        <Text>% Correctness: {calculatePercentage(userScores.multipleChoice.correct, userScores.multipleChoice.totalQuestions)}%</Text>
      </View>

      <View className="p-4 border border-gray-500 rounded-lg mb-4">
        <Text className="text-lg font-bold mb-2">Fill in the Blank Quiz</Text>
        <Text>Correct: {userScores.fillInBlank.correct}</Text>
        <Text>Wrong: {userScores.fillInBlank.wrong}</Text>
        <Text>% Correctness: {calculatePercentage(userScores.fillInBlank.correct, userScores.trueFalse.totalQuestions)}%</Text>
         </View>

         <View className="p-4 border border-gray-500 rounded-lg mb-4 px-8">
        <Text className="text-lg font-bold mb-2">True False</Text>
        <Text>Correct: {userScores.trueFalse.correct}</Text>
        <Text>Wrong: {userScores.trueFalse.wrong}</Text>
        <Text>% Correctness: {calculatePercentage(userScores.trueFalse.correct, userScores.trueFalse.totalQuestions)}%</Text>
        </View>


        <View className="p-4 border border-gray-500 rounded-lg mb-4 px-8">
        <Text className="text-lg font-bold mb-2">Matching Table</Text>
        <Text>Correct: {userScores.matchingTable.correct}</Text>
        <Text>Wrong: {userScores.matchingTable.wrong}</Text>
        <Text>% Correctness: {calculatePercentage(userScores.matchingTable.correct, userScores.matchingTable.totalQuestions)}%</Text>
        </View>

    </View>
  );
};

export default Dashboard;
