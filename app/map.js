import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import MapView from 'react-native-maps';
import { composeWithTracker } from 'react-komposer';
import EventHorizon from 'react-native-event-horizon';
import Loading from './loading';
import updateLocation from './actions/location.actions';
import fetchPokemon from './fetch';
import PokeMarker from './pokemarker';
import RefeshIcon from './icons/refresh.icon';
import MenuIcon from './icons/menu.icon';
import NavigationIcon from './icons/navigation.icon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  map: {
    flex: 1,
  },
});

class Map extends Component {
  constructor(props) {
    super(props);
    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.triggerRefresh = this.triggerRefresh.bind(this);
  }

  componentDidMount() {
    setTimeout(fetchPokemon, 3000);
  }

  componentWillUnmount() {

  }

  /**
   * Toggles to track a users navigation
   */
  toggleNavigation(track) {
    this.setState({
      followsUserLocation: typeof track !== 'undefined' ? track : !this.state.followsUserLocation,
    });
  }

  triggerRefresh() {
    const { time } = EventHorizon.subscribe('timer');
    if (time === 0) {
      fetchPokemon();
    } else {
      Alert.alert(
        'Please Wait',
        `You still have ${time} seconds before you can refresh`,
        [
          { text: 'OK' },
        ]
      );
    }
  }

  render() {
    const { pokemon, track } = this.props;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          onRegionChangeComplete={updateLocation}
          followsUserLocation={track}
          showsUserLocation
          zoomEnabled
        >
          {
            pokemon.map((poke, index) => (
              <PokeMarker {...poke} key={poke.id} index={index} />
            ))
          }
        </MapView>
        <RefeshIcon />
        <MenuIcon />
        <NavigationIcon track={track} />
      </View>
    );
  }
}

Map.propTypes = {
  pokemon: PropTypes.array,
  track: PropTypes.bool,
};

Map.defaultProps = {
  pokemon: [],
  track: true,
};

const onPropsChange = (props, onData) => {
  const { pokemon, track } = EventHorizon.subscribe('map');
  const { filtered } = EventHorizon.subscribe('menu');
  const newList = pokemon.filter((o) => filtered.indexOf(String(o.pokemonId)) === -1);
  onData(null, {
    pokemon: newList,
    track,
  });
};

export default composeWithTracker(onPropsChange, Loading, Loading)(Map);
