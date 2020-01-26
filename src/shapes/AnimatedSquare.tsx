import React from 'react';
import { Animated } from 'react-native';
import { Shape, Path } from '@react-native-community/art';
import AnimatedShape from '../interfaces/AnimatedShape';

interface Props {
  size: number,
  color: string,
  x: number,
  y: number
}

class Square extends React.PureComponent<Props> implements AnimatedShape {
  static defaultProps = {
    size: 0,
    color: '#000000',
    x: 0,
    y: 0
  }

  drawPath = () => {
    const { size, x, y } = this.props;

    return new Path()
      .moveTo(x,y)
      .lineTo(x+size, y)
      .lineTo(x+size, y+size)
      .lineTo(x, y+size)
      .lineTo(x, y);
  }

  render() {
    const { color } = this.props;
    return (
      <Shape d={this.drawPath()} fill={color} />
    );
  }
}

export default Animated.createAnimatedComponent(Square);
