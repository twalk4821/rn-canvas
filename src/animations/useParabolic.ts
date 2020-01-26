import {useState, useEffect} from 'react';
import { Animated } from 'react-native';

export const useParabolic = (value: Animated.Value, vertex: number, final: number, duration: number) => {
  useEffect(() => {
    Animated.sequence([
      Animated.timing(
        value,
        {
          toValue: vertex,
          duration: duration
        }
      ),
    Animated.timing(
      value,
      {
        toValue: final,
        duration: duration
      }
    )]).start();
  }, [])

}