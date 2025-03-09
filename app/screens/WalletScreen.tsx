import React, { useState } from 'react';
import { View, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AccountHeader from '../components/AccountHeader';
import BalanceDisplay from '../components/BalanceDisplay';
import ActionButtons from '../components/ActionButtons';
import CryptoAsset from '../components/CryptoAsset';
import BottomTabBar from '../components/BottomTabBar';

// Mock data for the crypto assets - exactly matching the first image
const cryptoAssets = [
  {
    name: "Santa's Dick",
    symbol: "HOHOHO",
    amount: 10000,
    value: 1614.15,
    change: 1187.86,
    // iconUrl: require('../assets/crypto-icons/santa.png'),
  },
  {
    name: "Solana",
    symbol: "SOL",
    amount: 0.3118,
    value: 70.55,
    change: -3.72,
    // iconUrl: require('../assets/crypto-icons/solana.png'),
  },
  {
    name: "2025X Before New Year's Eve",
    symbol: "2025X",
    amount: 23018.63887,
    value: 2.00,
    change: 0.74,
    // iconUrl: require('../assets/crypto-icons/2025x.png'),
  },
  {
    name: "XRP on Solana",
    symbol: "XRP",
    amount: 451.37239,
    value: 1.72,
    change: 0.25,
    // iconUrl: require('../assets/crypto-icons/xrp.png'),
  },
  {
    name: "CHILLGRINCH",
    symbol: "CHILLGR",
    amount: 13127.96505,
    value: 1.24,
    change: -0.43,
    // iconUrl: require('../assets/crypto-icons/chillgrinch.png'),
  },
  {
    name: "HUZZMAS",
    symbol: "HUZZMAS",
    amount: 20309.04993,
    value: 1.19,
    change: -0.71,
    // iconUrl: require('../assets/crypto-icons/huzzmas.png'),
  },
];

const WalletScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Hardcoded values to exactly match the first image
  const totalBalance = 1694.00;
  const totalProfit = 1172.50;
  const percentageChange = 224.83;

  return (
    <View className="flex-1">
      <LinearGradient
        colors={['#0A3B22', '#0A2A1E', '#0A1A24']}
        locations={[0, 0.12, 1]}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />
      
      <SafeAreaView className="flex-1">
        <StatusBar barStyle="light-content" />
        
        <AccountHeader accountName="Account 1" accountNumber={1} />
        
        <BalanceDisplay 
          balance={totalBalance} 
          profit={totalProfit} 
          percentageChange={percentageChange} 
        />
        
        <ActionButtons />
        
        <ScrollView className="flex-1">
          {cryptoAssets.map((asset, index) => (
            <CryptoAsset
              key={index}
              name={asset.name}
              symbol={asset.symbol}
              amount={asset.amount}
              value={asset.value}
              change={asset.change}
              // iconUrl={asset.iconUrl}
            />
          ))}
        </ScrollView>
        
        <BottomTabBar activeTab={activeTab} onTabPress={setActiveTab} />
      </SafeAreaView>
    </View>
  );
};

export default WalletScreen; 