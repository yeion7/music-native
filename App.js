import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Title>
          <Platzi>Platzi</Platzi>
          <Music>Music</Music>
        </Title>
      </Container>
    );
  }
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: rgba(233, 131, 238, 0.5);
    `

const Title = styled.View`
  flex-direction: row;
`

const Platzi = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 25;
`

const Music = styled.Text`
  color: #bfafd9;
  font-weight: bold;
  font-size: 25;
`
