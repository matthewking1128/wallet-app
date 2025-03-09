import React from "react";
import { View, TouchableOpacity } from "react-native";
import { House, LayoutGrid, ArrowRightLeft, Clock, Compass, } from "lucide-react-native";

type BottomTabBarProps = {
  activeTab: string;
  onTabPress: (tabName: string) => void;
};

const BottomTabBar: React.FC<BottomTabBarProps> = ({ activeTab, onTabPress, }) => {
  const tabs = [
    { name: "home", icon: House },
    { name: "grid", icon: LayoutGrid },
    { name: "sync", icon: ArrowRightLeft }, 
    { name: "time", icon: Clock },
    { name: "Compass ", icon: Compass },
  ];

  return (
    <View className="flex-row justify-around items-center p-3 px-5 pb-2 pt-1">
      {tabs.map((tab) => (
        <TouchableOpacity key={tab.name} onPress={() => onTabPress(tab.name)} className="items-center justify-center p-2">
          <tab.icon size={24} color={activeTab === tab.name ? "#c29ceb" : "#8E8E93"} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BottomTabBar;
