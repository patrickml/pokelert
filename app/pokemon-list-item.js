import React, { Component, PropTypes } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

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
  name: {
    paddingLeft: 5,
  },
});

export default class ListItem extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { name, image } = this.props;
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Image source={image} />
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.number,
};
