/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Item, Input, Icon } from "native-base";

const Searcher = ({ handleChange, state }) => (
  <Header searchBar rounded>
    <Item>
      <Icon name="ios-search" />
      <Input
        autoCorrect={false}
        placeholder="Search"
        value={state.text}
        onChangeText={handleChange}
      />
    </Item>
  </Header>
);

export default Searcher;
