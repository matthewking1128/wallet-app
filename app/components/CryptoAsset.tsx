import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type CryptoAssetProps = {
  name: string;
  symbol: string;
  amount: number;
  value: number;
  change: number;
  // iconUrl: any; // This would be a require() for local images or a URL
};

const CryptoAsset: React.FC<CryptoAssetProps> = ({
  name,
  symbol,
  amount,
  value,
  change,
  // iconUrl,
}) => {
  const isPositive = change >= 0;
  const formattedChange = isPositive ? `+$${Math.abs(change).toFixed(2)}` : `-$${Math.abs(change).toFixed(2)}`;
  
  // Placeholder for crypto icon
  const renderPlaceholderIcon = () => {
    let bgColor = "bg-gray-700";
    let textColor = "text-white";
    let letter = symbol.charAt(0);
    
    if (symbol === "HOHOHO") {
      bgColor = "bg-red-500";
      letter = "H";
    }
    else if (symbol === "SOL") {
      bgColor = "bg-blue-900";
      letter = "S";
    }
    else if (symbol === "2025X") {
      bgColor = "bg-yellow-800";
      letter = "2";
    }
    else if (symbol === "XRP") {
      bgColor = "bg-blue-500";
      letter = "X";
    }
    else if (symbol === "CHILLGR") {
      bgColor = "bg-green-700";
      letter = "C";
    }
    else if (symbol === "HUZZMAS") {
      bgColor = "bg-red-600";
      letter = "H";
    }
    
    return (
      <View className={`w-11 h-11 rounded-full ${bgColor} items-center justify-center mr-3 relative`}>
        {/* Document icon for some assets */}
        {['HOHOHO', '2025X', 'XRP', 'CHILLGR', 'HUZZMAS'].includes(symbol) && (
          <View className="absolute -right-2 bottom-0">
            <Ionicons name="document-text-outline" size={20} color="white" />
          </View>
        )}
        <Text className={`${textColor} font-bold text-base`}>{letter}</Text>
      </View>
    );
  };
  
  return (
    <View className='bg-slate-50/5 rounded-xl mx-4 my-1'>
      <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 border-gray-800">
        <View className="flex-row items-center">
          {/* <Image 
            source={iconUrl} 
            className="w-10 h-10 rounded-full mr-3" 
          /> */}
          {renderPlaceholderIcon()}
          <View>
            <Text className="text-white font-medium text-base">{name}</Text>
            <Text className="text-gray-400 text-xs">
              {amount.toLocaleString(undefined, { maximumFractionDigits: 6 })} {symbol}
            </Text>
          </View>
        </View>
        
        <View className="flex-row items-center">
          <View className="items-end">
            <Text className="text-white font-medium text-base">
              ${value.toFixed(2)}
            </Text>
            <Text className={isPositive ? "text-green-500 text-xs" : "text-red-500 text-xs"}>
              {formattedChange}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CryptoAsset; 