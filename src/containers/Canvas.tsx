import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Surface } from '@react-native-community/art';

interface Props {
  width: number,
  height: number,
}

const style = StyleSheet.create({
  canvas: {
    borderWidth: 1,
    borderColor: '#000000'
  }
});

class Canvas extends React.PureComponent<Props> {
  static defaultProps = {
    width: 0,
    height: 0
  }
  render() {
    const { width, height, children } = this.props;
    return (
      <View style={[style.canvas, {width: width + 2, height: height + 2}]}>
        <Surface width={width} height={height}>{children}</Surface>
      </View>
    );
  }
}

export default Canvas;