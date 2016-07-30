import React, { PropTypes, Component } from 'react';
import { View, Image, StyleSheet, Animated, Easing } from 'react-native';
import EventHorizon from 'react-native-event-horizon';
import { composeWithTracker } from 'react-komposer';
import Loading from './loading';
import normal from './assets/images/pokeballs/normal.png';
import great from './assets/images/pokeballs/great.png';
import ultra from './assets/images/pokeballs/ultra.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 30,
    left: 40,
    flexDirection: 'row',
  },
});

class Fetching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      normalA: new Animated.Value(0),
      greatA: new Animated.Value(0),
      ultraA: new Animated.Value(0),
    };
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.state.normalA.setValue(0);
    this.state.greatA.setValue(0);
    this.state.ultraA.setValue(0);

    // normal ball animation
    const n = Animated.timing(
      this.state.normalA,
      {
        toValue: 360,
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      }
    );

    // great ball animation
    const g = Animated.timing(
      this.state.greatA,
      {
        toValue: 360,
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      }
    );

    // ultra ball animation
    const u = Animated.timing(
      this.state.ultraA,
      {
        toValue: 360,
        duration: 600,
        easing: Easing.inOut(Easing.ease),
      }
    );

    n.start(() => g.start(() => u.start(() => this.animate())));
  }

  render() {
    if (!this.props.loading) {
      return false;
    }
    return (
      <View style={styles.container}>
        <Animated.Image
          source={normal}
          style={{
            marginLeft: 5,
            marginRight: 5,
            transform: [
              {
                rotate: this.state.normalA.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}
        />
        <Animated.Image
          source={great}
          style={{
            marginLeft: 5,
            marginRight: 5,
            transform: [
              {
                rotate: this.state.greatA.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}
        />
        <Animated.Image
          source={ultra}
          style={{
            marginLeft: 5,
            marginRight: 5,
            transform: [
              {
                rotate: this.state.ultraA.interpolate({
                  inputRange: [0, 360],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          }}
        />
      </View>
    );
  }
}

Fetching.propTypes = {
  loading: PropTypes.bool,
};

export default composeWithTracker((props, onData) => {
  const { loading } = EventHorizon.subscribe('map');
  onData(null, { loading });
}, Loading, Loading)(Fetching);
