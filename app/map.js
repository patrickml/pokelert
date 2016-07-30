import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { composeWithTracker } from 'react-komposer';
import EventHorizon from 'react-native-event-horizon';
import Loading from './loading';
import { updateRegion } from './actions/map.actions';
import { toggleMenu } from './actions/menu.actions';
import PokeMarker from './pokemarker';
import Icon from './icon';
import refreshIcon from './assets/images/icons/refresh.png';
import navigationIcon from './assets/images/icons/navigation.png';
import menuIcon from './assets/images/icons/menu/menu.png';

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
  mc: {
    position: 'absolute',
    top: 30,
    left: 10,
  },
  menu: {
    width: 20,
    height: 20,
  },
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
    this.state = {
      region: {
        latitude: 34.008824881138935,
        longitude: -118.49761247634888,
      },
      followsUserLocation: false,
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
    const navigationStyle = [
      styles.navigation, followsUserLocation && { opacity: 1 } || { opacity: 0.5 },
    ];
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          onRegionChangeComplete={(r) => this.setState({ region: r })}
          followsUserLocation={followsUserLocation}
          showsUserLocation
          zoomEnabled
        >
          {
            pokemon.map((poke, index) => (
              <PokeMarker {...poke} key={poke.id} index={index} />
            ))
          }
        </MapView>
        <Icon
          onPress={() => toggleMenu()}
          styles={{ container: styles.mc, image: styles.menu }}
          image={menuIcon}
        />
        <Icon
          onPress={() => updateRegion(region)}
          styles={{ container: styles.rc, image: styles.refresh }}
          image={refreshIcon}
        />
        <Icon
          onPress={() => this.toggleNavigation()}
          styles={{ container: styles.nc, image: navigationStyle }}
          image={navigationIcon}
        />
      </View>
    );
  }
}

Map.propTypes = {
  pokemon: React.PropTypes.array,
};

Map.defaultProps = {
  pokemon: [],
};

const onPropsChange = (props, onData) => {
  const { pokemon } = EventHorizon.subscribe('map');
  onData(null, { pokemon });
};

export default composeWithTracker(onPropsChange, Loading, Loading)(Map);
