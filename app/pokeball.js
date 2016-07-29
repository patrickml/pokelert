import React, { Component } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';

export default class Pokeball extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animation: new Animated.Value(0),
    };
    this.animate = this.animate.bind(this);
  }

  animate() {
    Animated.timing(
      this.state.animation,
      {
        toValue: 360 * 20,
        duration: 600 * 20,
        easing: Easing.inOut(Easing.ease)
      }
    ).start(this.animate);
  }

  componentDidMount() {
    this.animate();
  }

  render() {
    return (
      <Animated.Image
        source={this.props.image}
        style={{
          transform: [
            {
              rotate: this.state.animation.interpolate({
                inputRange: [0, 360],
                outputRange: ['0deg', '360deg']
              })
            },
          ]
        }}
      />
    );
  }
}
