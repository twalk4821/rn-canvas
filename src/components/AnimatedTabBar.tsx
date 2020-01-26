import React, { Fragment } from 'react';
import { Animated, Button } from 'react-native';
import Canvas from '../containers/Canvas';
import AnimatedTab from '../shapes/AnimatedTab';

interface Props {
  width: number,
  height: number
}

interface State {
  activeTab: number,
  tabStart: Animated.Value,
  tabHeight: Animated.Value
}

class AnimatedTabBar extends React.PureComponent<Props, State> {
  static defaultProps = {
    color: '#00FFAA',
    width: 250,
    height: 250,
  };

  state = {
    activeTab: 0,
    tabStart: new Animated.Value(250),
    tabHeight: new Animated.Value(25)
  };

  startFirstAnimation() {
    const { tabStart, tabHeight } = this.state;
    Animated.parallel([
      Animated.timing(tabStart, {
        toValue: 125,
        duration: 1000
      }),
      Animated.sequence([
        Animated.timing(tabHeight, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(tabHeight, {
          toValue: 25,
          duration: 500
        })
      ])
    ]).start()
  }


  startSecondAnimation = () => {
    const { tabStart, tabHeight } = this.state;
    Animated.parallel([
      Animated.timing(tabStart, {
        toValue: 250,
        duration: 1000
      }),
      Animated.sequence([
        Animated.timing(tabHeight, {
          toValue: 0,
          duration: 500
        }),
        Animated.timing(tabHeight, {
          toValue: 25,
          duration: 500
        })
      ])
    ]).start()
  }

  toggle = () => {
    const { activeTab } = this.state;
    if (activeTab === 0) {
      this.startFirstAnimation()
    } else {
      this.startSecondAnimation()
    }

    this.setState({ activeTab: 1 - activeTab })
  }

  render() {
    const { tabStart, tabHeight } = this.state;

    return (
      <Fragment>
        <Canvas width={250} height={250}>
          <AnimatedTab width={250} height={250} tabStart={tabStart} tabHeight={tabHeight} />
        </Canvas>
        <Button title="Toggle" onPress={this.toggle} />
      </Fragment>

    );
  }
}

export default Animated.createAnimatedComponent(AnimatedTabBar);
