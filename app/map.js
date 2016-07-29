import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { composeWithTracker } from 'react-komposer';
import EventHorizon from 'react-native-event-horizon';
import _ from 'lodash';
import Loading from './loading';
import { updateRegion } from './actions/map.actions';
import { openMenu } from './actions/map.actions';
import PokeMarker from './pokemarker';
import refreshIcon from './assets/images/icons/refresh.png';
import navigationIcon from './assets/images/icons/navigation.png';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: {
        latitude: 34.008824881138935,
        longitude: -118.49761247634888,
      },
      followsUserLocation: true,
    };
    this.toggleNavigation = this.toggleNavigation.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('updating pokemon');
      updateRegion(this.state.region);
    }, 60000);
    updateRegion(this.state.region);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  /**
   * Toggles to track a users navigation
   */
  toggleNavigation(track) {
    this.setState({
      followsUserLocation: typeof track !== 'undefined' ? track : !this.state.followsUserLocation,
    });
  }

  render() {
    const { pokemon } = this.props;
    const { region, followsUserLocation } = this.state;
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          onRegionChangeComplete={(region) => this.setState({ region })}
          followsUserLocation={followsUserLocation}
          showsUserLocation
          zoomEnabled
        >
          {
            pokemon.map((pokemon, index) => (
              <PokeMarker {...pokemon} key={pokemon.id} index={index} />
            ))
          }
        </MapView>
        <TouchableOpacity
          onPress={() => updateRegion(this.state.region)}
          style={styles.rc}
        >
          <Image source={refreshIcon} style={styles.refresh} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.toggleNavigation()}
          style={styles.nc}
        >
          <Image
            source={navigationIcon}
            style={[styles.navigation, followsUserLocation && { opacity: 1 } || { opacity: 0.5 }]}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

Map.propTypes = {
  pokemon: React.PropTypes.array,
}

Map.defaultProps = {}

const styles = StyleSheet.create({
  rc: {
    position: 'absolute',
    top: 30,
    right: 15,
    opacity: 0.5,
  },
  refresh: {
    width: 20,
    height: 20,
  },
  nc: {
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
  navigation: {
    width: 30,
    height: 30,
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  map: {
    flex: 1,
  }
});

const onPropsChange = (props, onData) => {
  const { pokemon } = EventHorizon.subscribe('map');
  onData(null, { pokemon });
};

export default composeWithTracker(onPropsChange, Loading, Loading)(Map);
