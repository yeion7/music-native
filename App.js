import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Font } from 'expo'
import { Spinner, InputGroup, Input, Icon, Button } from 'native-base'

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
                <View>
                  <Wrapper>
                    <Platzi>Platzi</Platzi>
                    <Music>Music</Music>
                  </Wrapper>
                  <Message>Tu música sin límites</Message>
                </View>
                <Searcher>
                    <InputGroup iconRight>
                      <Input
                        placeholder='Busca tu canción favorita'
                        style={{fontSize: 12, flex: 1}}
                      />
                      <Button transparent dark>
                        <Icon name='search' />
                      </Button>
                    </InputGroup>
                </Searcher>
              </View>
            ) : <Spinner color='#9B59B6' />
          }
      </Container>

    );
  }
}

const { width } = Dimensions.get('window');

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Searcher = styled.View`
  width: ${width - (width * 0.2)};
  margin: 30 60;
`

const Platzi = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 28;
  font-family: Quicksand-Bold
`

const Music = styled.Text`
  color: #8E44AD;
  font-weight: bold;
  font-size: 28;
  font-family: Quicksand-Bold
`

const Message = styled.Text`
  color: white;
  font-family: Quicksand-Light;
  align-self: center;

`

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #BE90D4;

`
