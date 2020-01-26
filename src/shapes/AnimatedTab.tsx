import React from 'react';
import { Animated } from 'react-native';
import { Shape, Path } from '@react-native-community/art';
import AnimatedShape from '../interfaces/AnimatedShape';

interface Props {
  color: string,
  width: number,
  height: number,
  tabStart: number
  tabHeight: number,
  tabRadius: number,
  tabWidth: number
}

class Tab extends React.PureComponent<Props> implements AnimatedShape {
  static defaultProps = {
    color: '#00FFAA',
    width: 100,
    height: 100,
    tabStart: 100,
    tabHeight: 25,
    tabRadius: 25,
    tabWidth: 25
  }

  drawPath = () => {
    const { width, height, tabStart, tabHeight, tabRadius, tabWidth } = this.props;
    return new Path()
      .moveTo(0, 0)
      .lineTo(width, 0)
      .lineTo(width, height - tabRadius)
      .lineTo(tabStart, height - tabRadius)
      .arcTo(tabStart - tabRadius, height - tabRadius + tabHeight)
      .lineTo(tabStart - (tabWidth - tabRadius), height - tabRadius + tabHeight)
      .arcTo(tabStart - tabWidth, height - tabRadius)
      .lineTo(0, height - tabRadius)
      .lineTo(0, 0)

  }

  render() {
    const { color } = this.props;
    return (
      <Shape d={this.drawPath()} fill={color} />
    );
  }
}

export default Animated.createAnimatedComponent(Tab);
