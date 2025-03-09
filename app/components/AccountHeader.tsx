import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronDown, Maximize, Search } from 'lucide-react-native';

type AccountHeaderProps = {
  accountName: string;
  accountNumber: number;
};

const AccountHeader: React.FC<AccountHeaderProps> = ({ accountName, accountNumber }) => {
  return (
    <View className="flex-row justify-between items-center px-4 pb-2 pt-8">
      <View className="flex-row items-center font-semibold">
        <View className="w-8 h-8 rounded-full bg-[#c29ceb] items-center justify-center mr-2">
          <Text className="text-purple-900 font-bold text-xs">A{accountNumber}</Text>
        </View>
        <Text className="text-white font-medium text-base">{accountName}</Text>
        <ChevronDown size={16} color="white" style={{ marginLeft: 2, transform: [{ translateY: 1 }] }} />
      </View>
      <View className="flex-row">
        <TouchableOpacity className="mr-4">
          <Maximize size={18} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Search size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountHeader; 