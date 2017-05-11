import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Font } from 'expo'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
      await Font.loadAsync({
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
        'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
        'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
        'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
      });

      this.setState({ fontLoaded: true });

    }


  render() {
    return (
      <Container>
        {
          this.state.fontLoaded && (
            <Title>
              <Platzi>Platzi</Platzi>
              <Music>Music</Music>
            </Title>
          )

        }

      </Container>
    );
  }
}

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: #BE90D4;
    `

const Title = styled.View`
  flex-direction: row;
`

const Platzi = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 25;
  font-family: Quicksand-Bold
`

const Music = styled.Text`
  color: #bfafd9;
  font-weight: bold;
  font-size: 25;
  font-family: Quicksand-Bold
`
