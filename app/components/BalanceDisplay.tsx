import React from 'react';
import { View, Text } from 'react-native';

type BalanceDisplayProps = {
  balance: number;
  profit: number;
  percentageChange: number;
};

const BalanceDisplay: React.FC<BalanceDisplayProps> = ({ 
  balance, 
  profit, 
  percentageChange 
}) => {
  const formattedBalance = balance.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  const formattedProfit = profit > 0 ? `+${profit.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}` : profit.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  const formattedPercentage = percentageChange > 0 ? 
    `+${percentageChange.toFixed(2)}%` : 
    `${percentageChange.toFixed(2)}%`;

  return (
    <View className="items-center py-4 gap-y-1 font-['SF Pro Display', 'Inter', 'Roboto', 'sans-serif']">
      <Text className="text-white text-5xl font-bold">{formattedBalance}</Text>
      <Text className="text-green-500 font-medium text-sm mt-1 space-x-2">
        <Text className='font-semibold text-lg'>{formattedProfit} </Text>
        <Text className='font-semibold bg-green-900/35 px-[3px] py-[1.5px] rounded-[5px] text-lg'>{formattedPercentage}</Text>
      </Text>
    </View>
  );
};

export default BalanceDisplay; 