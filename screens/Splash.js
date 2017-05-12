import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { Font } from 'expo'
import { Spinner } from 'native-base'

import Logo from '../components/Logo'

class Splash extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
      await Font.loadAsync({
        'Quicksand-Bold': require('../assets/fonts/Quicksand-Bold.ttf'),
        'Quicksand-Light': require('../assets/fonts/Quicksand-Light.ttf'),
        'Quicksand-Medium': require('../assets/fonts/Quicksand-Medium.ttf'),
        'Quicksand-Regular': require('../assets/fonts/Quicksand-Regular.ttf'),
      });

      this.setState({ fontLoaded: true });
    }

  render() {
    return (
      <Container>
          {
            this.state.fontLoaded ? (
              <View>
                <Logo/>
                <Spinner color='#9B59B6' />
              </View>
            ) : <Spinner color='#9B59B6' />
          }
      </Container>
    );
  }
}

export default Splash;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #BE90D4;

`
