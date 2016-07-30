import React, { PropTypes } from 'react';
import { Image, TouchableOpacity } from 'react-native';

const Icon = ({ styles, image, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Image source={image} style={styles.image} />
  </TouchableOpacity>
);

Icon.propTypes = {
  styles: PropTypes.object,
  image: PropTypes.number,
  onPress: PropTypes.func,
};

export default Icon;
