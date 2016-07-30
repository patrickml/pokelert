import React, { Component, PropTypes } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { addPokemonToFilter, removePokemonToFilter } from './actions/menu.actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderBottomColor: '#DADFE1',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingLeft: 5,
  },
  containerActive: {
    backgroundColor: '#DADFE1',
  },
  name: {
    paddingLeft: 5,
  },
});

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.filtered !== this.props.filtered;
  }

  handlePress() {
    if (this.props.filtered) {
      removePokemonToFilter(this.props.id);
    } else {
      addPokemonToFilter(this.props.id);
    }
  }

  render() {
    const { name, image, filtered } = this.props;
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <View style={[styles.container, filtered && styles.containerActive]}>
          <Image source={image} />
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

ListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.number,
  filtered: PropTypes.bool,
};
