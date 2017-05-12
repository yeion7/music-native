import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Font } from 'expo'
import { Spinner } from 'native-base'

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
      await Font.loadAsync({
        'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
        'Quicksand-Light': require('./assets/fonts/Quicksand-Light.ttf'),
        'Quicksand-Medium': require('./assets/fonts/Quicksand-Medium.ttf'),
        'Quicksand-Regular': require('./assets/fonts/Quicksand-Regular.ttf'),
      });

      this.setState({ fontLoaded: true });

    }


  render() {
    return (
      <Container >
          {
            this.state.fontLoaded ? (
              <View>
                <Wrapper>
                  <Platzi>Platzi</Platzi>
                  <Music>Music</Music>
                </Wrapper>
                <Message>Tu música sin límites</Message>
              </View>
            ) : <Spinner color='#9B59B6' />
          }
      </Container>

    );
  }
}

const Wrapper = styled.View`
  flex-direction: row;
`

const Platzi = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 25;
  font-family: Quicksand-Bold
`

const Music = styled.Text`
  color: #8E44AD;
  font-weight: bold;
  font-size: 25;
  font-family: Quicksand-Bold
`

const Message = styled.Text`
  color: white;
  font-family: Quicksand-Light

`

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #BE90D4;

`
