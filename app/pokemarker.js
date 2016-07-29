import React, { PropTypes, Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Marker } from 'react-native-maps';
import { viewPokemon } from './actions/modal.actions';
import CountDown from './countdown';
import getPokemon from './pokedex';

const PokeMarker = ({ latitude, longitude, pokemonId, expiration_time, index }) => {
  const { name, image } = getPokemon(pokemonId);
  const interval = -(new Date().getTime() - (expiration_time * 1000))/1000;
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
  image: PropTypes.number,
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {

  }
});

export default PokeMarker;
