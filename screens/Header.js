import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Appbar, Title} from 'react-native-paper';

export default function Header(props) {
  return (
    <Appbar.Header
      theme={{
        colors: {
          primary: '#d580ff',
        },
      }}
      style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Title style={{color: '#f2f2f2'}}>{props.name}</Title>
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({});
