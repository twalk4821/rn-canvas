import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Animated,
} from 'react-native';

import AnimatedTabBar from './src/components/AnimatedTabBar';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AnimatedTabBar />
      </SafeAreaView>
    </>
  );
};

export default App;
