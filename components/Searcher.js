/* @flow weak */

import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Form, Item, Input,Label, Icon, Button } from 'native-base'
import styled from 'styled-components/native';

const Searcher = () => (
  <Container>
      <Form>
        <Item floatingLabel>
          <Icon name='search' />
          <Label>Busca tu canción favorita</Label>
          <Input
            autoCorrect={false}
            autoFocus={true}
            maxLengt={20}
            onChangeText={(text) => console.warn(text)}
            />
        </Item>
      </Form>
  </Container>
);

const { width } = Dimensions.get('window');

const Container = styled.View`
  width: ${width - (width * 0.2)};
  margin: 30 60;
`

export default Searcher;
