import React from 'react';
import { Animated, View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Canvas from '../containers/Canvas';
import AnimatedTab from '../shapes/AnimatedTab';

interface Props {
  width: number,
  height: number,
  animationDuration: number
}

interface State {
  activeTab: number,
  tabStart: Animated.Value,
  tabHeight: Animated.Value,
  tabWidth: Animated.Value
}

class AnimatedTabBar extends React.PureComponent<Props, State> {
  static defaultProps = {
    color: '#00FFAA',
    width: 350,
    height: 350,
    animationDuration: 1000
  };

  state = {
    activeTab: 0,
    tabStart: new Animated.Value(350),
    tabHeight: new Animated.Value(25),
    tabWidth: new Animated.Value(175)
  };

  startFirstAnimation() {
    const { animationDuration } = this.props;
    const { tabStart, tabHeight, tabWidth } = this.state;
    Animated.parallel([
      Animated.timing(tabStart, {
        toValue: 175,
        duration: animationDuration
      }),
      Animated.sequence([
        Animated.timing(tabHeight, {
          toValue: 0,
          duration: 0.5 * animationDuration
        }),
        Animated.timing(tabHeight, {
          toValue: 25,
          duration: 0.5 * animationDuration
        })
      ]),
      Animated.sequence([
        Animated.timing(tabWidth, {
          toValue: 200,
          duration: 0.5 * animationDuration
        }),
        Animated.timing(tabWidth, {
          toValue: 175,
          duration: 0.5 * animationDuration
        })
      ])
    ]).start()
  }


  startSecondAnimation = () => {
    const { animationDuration } = this.props;

    const { tabStart, tabHeight, tabWidth } = this.state;
    Animated.parallel([
      Animated.timing(tabStart, {
        toValue: 350,
        duration: animationDuration
      }),
      Animated.sequence([
        Animated.timing(tabHeight, {
          toValue: 0,
          duration: 0.5 * animationDuration
        }),
        Animated.timing(tabHeight, {
          toValue: 25,
          duration: 0.5 * animationDuration
        })
      ]),
      Animated.sequence([
        Animated.timing(tabWidth, {
          toValue: 200,
          duration: 0.5 * animationDuration
        }),
        Animated.timing(tabWidth, {
          toValue: 175,
          duration: 0.5 * animationDuration
        })
      ])
    ]).start()
  }

  toggle1 = () => {
    const { activeTab } = this.state;
    if (activeTab === 0) {
      this.startFirstAnimation()
    }

    this.setState({ activeTab: 1 })
  }


  toggle2 = () => {
    const { activeTab } = this.state;
    if (activeTab === 1) {
      this.startSecondAnimation()
    } 

    this.setState({ activeTab: 0})
  }

  render() {
    const { width, height } = this.props
    const { tabStart, tabHeight, tabWidth } = this.state;

    return (
      <>
        <TouchableHighlight style={{ width: 0.5 * width, height: 25, backgroundColor: 'lightgrey', position: 'absolute', top: height - 25 }} onPress={this.toggle1} >
          <Text style={{textAlign: 'center'}}>1</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ width: 0.5 * width, height: 25, backgroundColor: 'lightgrey', position: 'absolute', top: height - 25, left: 0.5 * width }} onPress={this.toggle2} >
          <Text style={{textAlign: 'center'}}>2</Text>
        </TouchableHighlight>
        <View pointerEvents="none">
          <Canvas width={width} height={height}>
            <AnimatedTab width={width} height={height} tabStart={tabStart} tabHeight={tabHeight} tabWidth={tabWidth} />
          </Canvas>
        </View>
      </>

    );
  }
}

export default Animated.createAnimatedComponent(AnimatedTabBar);
