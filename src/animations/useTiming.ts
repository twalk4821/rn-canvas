import {useState, useEffect} from 'react';
import { Animated } from 'react-native';

export const useTiming = (value: Animated.Value, final: number, duration: number) => {
  useEffect(() => {
    Animated.timing(
      value,
      {
        toValue: final,
        duration: duration
      }
    ).start();
  }, [])
}