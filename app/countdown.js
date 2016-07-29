import React, { PropTypes, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { removePokemon } from './actions/map.actions';

const getTime = (sec_num) => {
  let days    = Math.floor(sec_num / (3600 * 24));
  let hours   = Math.floor((sec_num - (days * (3600 * 24)))/3600);
  let minutes = Math.floor((sec_num - (days * (3600 * 24)) - (hours * 3600)) / 60);
  let seconds = Math.floor(sec_num - (days * (3600 * 24)) - (hours * 3600) - (minutes * 60));

  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return `${minutes}:${seconds}`;
}

export default class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.setState({ seconds: this.props.seconds });
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({ seconds: this.state.seconds - 1 });
    if (this.state.seconds <= 1) {
      clearInterval(this.interval);
      removePokemon(this.props.index);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {
            getTime(this.state.seconds > 0 && this.state.seconds || 0)
          }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, .50)',
    borderColor: 'rgba(255, 255, 255, 0)',
    borderRadius: 10,
    borderWidth: 0.5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  text: {
    fontSize: 10,
  }
});
