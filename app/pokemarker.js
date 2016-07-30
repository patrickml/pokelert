import React, { PropTypes } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
import CountDown from './countdown';
import getPokemon from './pokedex';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {

  },
});

const PokeMarker = ({ latitude, longitude, pokemonId, expiration_time, index }) => {
  const { image } = getPokemon(pokemonId);
  const interval = -(new Date().getTime() - (expiration_time * 1000)) / 1000;
  return (
    <Marker coordinate={{ latitude, longitude }}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <CountDown seconds={interval} index={index} />
      </View>
    </Marker>
  );
};

PokeMarker.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  pokemonId: PropTypes.number,
  expiration_time: PropTypes.number,
  index: PropTypes.number,
};

export default PokeMarker;
