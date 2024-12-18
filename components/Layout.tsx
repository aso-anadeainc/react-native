import { Stack } from 'expo-router';
import React from 'react';
import { PaperProvider } from 'react-native-paper';

export const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <PaperProvider>
      <Stack>{children}</Stack>
    </PaperProvider>
  );
};
