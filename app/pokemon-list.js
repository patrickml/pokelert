import React, { Component, PropTypes } from 'react';
import { ScrollView } from 'react-native';
import _ from 'lodash';
import { getPokedex } from './pokedex';
import PokemonListItem from './pokemon-list-item';

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokedex: _.map(getPokedex(), (data, id) => ({ id, data })),
    };
  }

  render() {
    return (
      <ScrollView>
        {
          this.state.pokedex.map(({ id, data }) => (
            <PokemonListItem {...data} id={id} key={id} />
          ))
        }
      </ScrollView>
    );
  }
}

export default PokemonList;
