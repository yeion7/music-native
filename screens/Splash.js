import React from 'react';
import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { Font } from 'expo'
import { Spinner, Button, Text } from 'native-base'
import { nativate } from 'react-navigation'

import Logo from '../components/Logo'

class Splash extends React.Component {
  static navigationOptions = {
    header: null
  }

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
      const { navigate } = this.props.navigation;

      setTimeout(navigate, 2000, 'MainScreen' )

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
