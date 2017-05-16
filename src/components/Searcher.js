/* @flow weak */

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Item, Input, Icon } from "native-base";
import { connect } from "react-redux";
import { changeSearch } from "../actions/search";

const Searcher = ({ text, onChange }) => {
  return (
    <Header searchBar rounded>
      <Item>
        <Icon name="ios-search" />
        <Input
          autoCorrect={false}
          placeholder="Search"
          value={text}
          onChangeText={onChange}
        />
      </Item>
    </Header>
  );
};

function mapStateToProps(state, props) {
  console.log("estado", state), console.log("ownprops", props);
  return {
    text: state.search.text
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: () => dispatch(changeSearch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Searcher);
