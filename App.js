import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Text>Platzi Music</Text>
      </Container>
    );
  }
}

const Container = styled.View`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    `
