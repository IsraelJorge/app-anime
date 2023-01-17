import React, { ReactNode } from "react";
import { View, TextInput, TextInputProps } from "react-native";
import { StyledComponent } from "nativewind";

interface InputPros extends TextInputProps {
  Icon: React.ReactNode;
}

export const Input = ({ Icon, ...rest }: InputPros) => {
  return (
    <View className="w-11/12 flex-row items-center mb-3 relative">
      <TextInput
        className="w-full h-11 rounded-md px-2 bg-slate-300 font-medium border-2 border-slate-500 focus:border-indigo-800"
        {...rest}
      />

      <View className="absolute right-2">{Icon}</View>
    </View>
  );
};
